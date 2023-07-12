package com.komal.fullstackbackend.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity 
@Table(name="User")
@Data
public class User {
	@Id
	@GeneratedValue
	private long id;
	@Column(name="username")
	private String username;
	private String email;
	private String name;
}
