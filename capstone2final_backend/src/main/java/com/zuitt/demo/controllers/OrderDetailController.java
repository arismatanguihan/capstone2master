package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Book;
import com.zuitt.demo.models.Order;
import com.zuitt.demo.models.OrderDetail;
import com.zuitt.demo.repositories.BookRepository;
import com.zuitt.demo.repositories.OrderDetailRepository;
import com.zuitt.demo.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/orderdetails")
@CrossOrigin
public class OrderDetailController {

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/{order_id}/{book_id}")
    public OrderDetail createOrderDetail(
            @RequestBody OrderDetail orderDetail,
            @PathVariable Integer order_id,
            @PathVariable Integer book_id
            ) {
        Order order = orderRepository.findById(order_id).get();
        orderDetail.setOrderDetailOrder(order);

        Book book = bookRepository.findById(book_id).get();
        orderDetail.setBook(book);

        orderDetail.setStatus("Pending");
        return orderDetailRepository.save(orderDetail);

    }

    @GetMapping("/")
    public Iterable<OrderDetail> getOrderDetails() {
        return orderDetailRepository.findAll();
    }

    @PutMapping("setstatus/{orderDetailId}/accepted")
    public OrderDetail changetoAccepted(@PathVariable Integer orderDetailId) {
        OrderDetail orderDetail = orderDetailRepository.findById(orderDetailId).get();
        orderDetail.setStatus("Accepted");
        return orderDetailRepository.save(orderDetail);
    }

    @PutMapping("setstatus/{orderDetailId}/declined")
    public OrderDetail changetoDeclined(@PathVariable Integer orderDetailId) {
        OrderDetail orderDetail = orderDetailRepository.findById(orderDetailId).get();
        orderDetail.setStatus("Declined");
        return orderDetailRepository.save(orderDetail);
    }

    @DeleteMapping("delete/{orderDetailId}")
    public void deleteByOrderDetail(@PathVariable Integer orderDetailId){
        orderDetailRepository.deleteById(orderDetailId);
    }

}
