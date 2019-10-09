package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Role;
import com.zuitt.demo.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@RequestMapping("/roles")
@CrossOrigin(origins = "http://localhost:3000")
public class RoleController {
    @Autowired
    RoleRepository roleRepository;

    @GetMapping("/")
    public Iterable<Role> getRoles() {
        return roleRepository.findAll();
    }


    @GetMapping("/{id}")
    public Role getRolesById(@PathVariable Integer id){
        return roleRepository.findById(id).get();
    }


   /* @PostMapping("/")
    public Role addRole(@RequestBody Role role){
        return roleRepository.save(role);
    }*/

}
