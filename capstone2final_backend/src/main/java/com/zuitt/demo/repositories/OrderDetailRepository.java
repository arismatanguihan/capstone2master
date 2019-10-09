package com.zuitt.demo.repositories;

import com.zuitt.demo.models.OrderDetail;
import org.springframework.data.repository.CrudRepository;

public interface OrderDetailRepository extends CrudRepository<OrderDetail, Integer> {
    Iterable<OrderDetail> findByStatus(String p);

}
