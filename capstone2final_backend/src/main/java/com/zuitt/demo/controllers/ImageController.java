package com.zuitt.demo.controllers;



import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@RestController
public class ImageController {

    @RequestMapping(value = "image/{imageName}")
    @ResponseBody
    public byte[] getImage(@PathVariable(value = "imageName") String imageName)throws IOException{
        File serverFile = new File("src/main/resources/static/images/" + imageName);

        return Files.readAllBytes(serverFile.toPath());
    }
}
