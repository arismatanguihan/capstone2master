package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Book;
import com.zuitt.demo.models.Order;
import com.zuitt.demo.models.User;
import com.zuitt.demo.repositories.BookRepository;
import com.zuitt.demo.repositories.OrderRepository;
import com.zuitt.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;


    @PostMapping("/{user_id}")
    public Order createOrder(@RequestBody Order order, @PathVariable Integer user_id) {
        User user = userRepository.findById(user_id).get();
        order.setOrderUser(user);
        return orderRepository.save(order);
    }
}
