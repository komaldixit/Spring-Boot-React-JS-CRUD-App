package com.komal.fullstackbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableConfigurationProperties

//@EntityScan(basePackages = {"com.komal.fullstackbackend.model"})
public class FullstackbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackbackendApplication.class, args);
	}

}
