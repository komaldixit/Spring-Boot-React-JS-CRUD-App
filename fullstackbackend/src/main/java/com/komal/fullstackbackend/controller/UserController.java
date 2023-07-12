package com.komal.fullstackbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.komal.fullstackbackend.exception.UserNotFoundException;
import com.komal.fullstackbackend.model.User;
import com.komal.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin(origins="*")
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	@GetMapping("/users")
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable long id) {
		return userRepository.findById(id)
				.orElseThrow(()->new UserNotFoundException(id));
	}
	@PutMapping("user/{id}")
	User updateUser(@RequestBody User newUser ,@PathVariable long id) {
		
		return userRepository.findById(id)
		.map(user->{
			user.setName(newUser.getName());
			user.setUsername(newUser.getUsername());
			user.setEmail(newUser.getEmail());
			
			return userRepository.save(user);
		}).orElseThrow(()-> new UserNotFoundException(id));
		
	}
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable long id) {
		
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
			
		}
		userRepository.deleteById(id);
		return "User with id "+id+" has been deleted success.";
		
	}
	
	
	private void map(Object object) {
		// TODO Auto-generated method stub
		
	}
}
