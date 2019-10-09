package com.zuitt.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="bookrequestdetails")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String status;
    private int quantity;




    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order orderDetailOrder;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;



    /**
     * Constructors
     */

    public OrderDetail(){

    }

    public OrderDetail(String status, int quantity){
        this.status = status;
        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    public Order getOrderDetailOrder() {
        return orderDetailOrder;
    }

    public void setOrderDetailOrder(Order orderDetailOrder) {
        this.orderDetailOrder = orderDetailOrder;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
