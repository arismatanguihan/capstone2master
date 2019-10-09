package com.zuitt.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "bookrequests")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date date;


    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User orderUser;


    @OneToMany(mappedBy = "orderDetailOrder", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<OrderDetail> orderDetails;

    /**
     * Constructors
     */
    public Order(){

    }


    public Order (Date date){

        this.date = date;

    }



    public int getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getOrderUser() {
        return orderUser;
    }

    public void setOrderUser(User orderUser) {
        this.orderUser = orderUser;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }


}
