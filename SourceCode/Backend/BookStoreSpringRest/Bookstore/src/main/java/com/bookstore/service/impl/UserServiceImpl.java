package com.bookstore.service.impl;

import java.util.Set;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.domain.User;
import com.bookstore.domain.security.UserRole;
import com.bookstore.repository.RoleRepository;
import com.bookstore.repository.UserRepository;
import com.bookstore.service.UserSecurityService;
import com.bookstore.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	private static final Logger LOG = LoggerFactory.getLogger(UserSecurityService.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Override
	@Transactional
	public User createUser(User user, Set<UserRole> userRoles) {
		User userRetrived = userRepository.findByUsername(user.getUsername());
		
		if(userRetrived != null) {
			LOG.debug("User with this username already exist, please try another! " , user.getUsername());
		}
		
		else {
			for(UserRole ur: userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			
			userRetrived = userRepository.save(user);
		}
		
		return userRetrived;
	}

}
