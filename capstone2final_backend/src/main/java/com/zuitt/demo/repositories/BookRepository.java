package com.zuitt.demo.repositories;

import com.zuitt.demo.models.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Integer> {
//    List<Book> findAllByOrderByNameAsc();
//    List<Book> findAllByOrderByNameDesc();


}