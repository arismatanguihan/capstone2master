package com.zuitt.demo.controllers;

import com.zuitt.demo.models.OrderDetail;
import com.zuitt.demo.repositories.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
@CrossOrigin(origins = "http://localhost:3000")
public class PendingItemController {


    @Autowired
    OrderDetailRepository orderDetailRepository;

    @GetMapping("/pending")
    public Iterable<OrderDetail> getAllPending(){
        String p = "Pending";
        return orderDetailRepository.findByStatus(p);
    }

    @GetMapping("/accepted")
    public Iterable<OrderDetail> getAllAccepted(){
        String a = "Accepted";
        return orderDetailRepository.findByStatus(a);
    }

    @GetMapping("/declined")
    public Iterable<OrderDetail> getAllDeclined(){
        String d = "Declined";
        return orderDetailRepository.findByStatus(d);
    }


}
