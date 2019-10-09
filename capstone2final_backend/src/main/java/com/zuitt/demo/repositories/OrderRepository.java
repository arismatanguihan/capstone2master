package com.zuitt.demo.repositories;

import com.zuitt.demo.models.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {
}
