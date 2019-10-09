package com.zuitt.demo.controllers;

import com.zuitt.demo.models.Format;
import com.zuitt.demo.models.Book;
import com.zuitt.demo.repositories.FormatRepository;
import com.zuitt.demo.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    FormatRepository formatRepository;

    @GetMapping("/")
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

//    @GetMapping("/sort/asc")
//    public List<Book> getBooksAsc() {
//        return bookRepository.findAllByOrderByNameAsc();
//    }
//
//    @GetMapping("/sort/desc")
//    public List<Book> getBooksDesc() {
//        return bookRepository.findAllByOrderByNameDesc();
//    }


    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Integer id) {
        return bookRepository.findById(id).get();
    }


    @PutMapping("/edit/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book book){
        Book newBook = bookRepository.findById(id).get();
        return bookRepository.save(book);
    }

//    @PutMapping("/edit/{id}")
//    public void updateBook(@PathVariable Integer id, @RequestBody String title){
//        Book book = bookRepository.findById(id).get();
//        book.setTitle(title);
//        bookRepository.save(book);
//    }




    @DeleteMapping("/delete/{id}")
    public void deleteByBook(@PathVariable Integer id){
        bookRepository.deleteById(id);
    }

    @PostMapping("/{format_id}")
    public Book addBook(@RequestBody Book book, @PathVariable Integer format_id) {
        Format format = formatRepository.findById(format_id).get();
        book.setFormat(format);
        return bookRepository.save(book);
    }




//    @GetMapping(value = "/images/{image}",
//            produces = MediaType.IMAGE_JPEG_VALUE
//    )
//    public byte[] getImage(@PathVariable String image) throws IOException {
//        System.out.println(image);
//        InputStream in = getClass()
//                .getResourceAsStream("/resources/images/"+image);
//        return IOUtils.toByteArray(in);
//    }

    private static String UPLOADED_FOLDER = "src/main/resources/static/images/";

    @PostMapping("/upload/{prod_id}")
    public String singleFileUpload(@PathVariable Integer prod_id, @RequestParam("file") MultipartFile file,
                                   RedirectAttributes redirectAttributes) {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "error. no image uploaded.";
        }

        try {
            System.out.println(file.getOriginalFilename());
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

            Book book = bookRepository.findById(prod_id).get();
            book.setImage(file.getOriginalFilename());
            bookRepository.save(book);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return file.getOriginalFilename();
    }
}
