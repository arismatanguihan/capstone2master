package com.zuitt.demo.controllers;

import com.zuitt.demo.models.Format;
import com.zuitt.demo.repositories.FormatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/formats")
@CrossOrigin(origins = "http://localhost:3000")
public class FormatController {

    @Autowired
    FormatRepository formatRepository;

    @GetMapping("/")
    public Iterable<Format> getCategories() {
        return formatRepository.findAll();
    }

    @GetMapping("/{id}")
    public Format getCategoryById(@PathVariable Integer id) {
        return formatRepository.findById(id).get();
    }

    @PostMapping("/")
    public Format addCategory(@RequestBody Format format) {
        return formatRepository.save(format);
    }
}
