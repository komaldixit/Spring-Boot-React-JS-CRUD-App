 package com.komal.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException {
	public UserNotFoundException (long id) {
		super("Could not found the usr with id "+ id);
	}
	
}
