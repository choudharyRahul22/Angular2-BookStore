package com.bookstore;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bookstore.config.SecurityUtil;
import com.bookstore.domain.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner{
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		
		/*// First User
		User user1 = new User();
		user1.setFirstName("Rahul");
		user1.setLastName("choudhary");
		user1.setUsername("admin");
		user1.setPassword(SecurityUtil.encodePassword().encode("admin"));
		user1.setEmail("thecrazzyrahul@gmail.com");
		
		Role role1 = new Role();
		role1.setRoleId(0);
		role1.setName("ROLE_ADMIN");
		
		Set<UserRole> userRoles1 = new HashSet<>();
		userRoles1.add(new UserRole(user1, role1));
		
		userService.createUser(user1, userRoles1);
		userRoles1.clear();
		
		
		// Second User
		User user2 = new User();
		user2.setFirstName("Shalu");
		user2.setLastName("choudhary");
		user2.setUsername("user");
		user2.setPassword(SecurityUtil.encodePassword().encode("user"));
		user2.setEmail("shalu1990@gmail.com");
		
		Role role2 = new Role();
		role2.setRoleId(1);
		role2.setName("ROLE_USER");
		
		Set<UserRole> userRoles2 = new HashSet<>();
		userRoles2.add(new UserRole(user2, role2));
		
		userService.createUser(user2, userRoles2);
		userRoles2.clear();
		*/
		
	}
}
