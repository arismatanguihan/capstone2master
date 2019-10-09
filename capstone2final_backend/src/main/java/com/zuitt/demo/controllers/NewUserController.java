package com.zuitt.demo.controllers;


import com.zuitt.demo.models.Role;
import com.zuitt.demo.models.User;
import com.zuitt.demo.repositories.RoleRepository;
import com.zuitt.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class NewUserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @PostMapping("/register/")
    public User registerUser(@RequestBody User user){
        String hashedpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedpw);
        return userRepository.save(user);
    }

    @PostMapping("/register/{role_id}")
    public User registerUser(@RequestBody User user, @PathVariable Integer role_id){
        String hashedpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        Role role = roleRepository.findById(role_id).get();
        user.setPassword(hashedpw);
        user.setRole(role);
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user){
        User foundUser = userRepository.findByUsername(user.getUsername());
        if(foundUser != null && BCrypt.checkpw(user.getPassword(), foundUser.getPassword())) {
            return foundUser;
        }
        return null;
    }

    @PostMapping("/isRegistered")
    public boolean checkUser(@RequestBody User user){
        User foundUser = userRepository.findByUsername((user.getUsername()));
        if(foundUser != null){
            return true;
        }
        return false;
    }

}
