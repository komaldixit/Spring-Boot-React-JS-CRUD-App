package com.komal.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.komal.fullstackbackend.model.User;



public interface UserRepository  extends JpaRepository<User, Long>{

}
