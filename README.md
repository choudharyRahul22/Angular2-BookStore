# Angular2-BookStore
Complete Backend and Frontend using Spring Hibernate and Angular2

Create new component:
---------------------
ng g c new-component --module app

draw.io for architecture

Security:
---------
Role User and UserRole 3 Table are there.
Role and User has : Many To Many relationship.

To simplify above we introduce UserRole Table.
UserRole table conatins both RoleId and UserId

Role to UserRole and User to UserRole has One To Many Relation.

POM:
---
		<dependency>
			<groupId>org.springframework.session</groupId>
			<artifactId>spring-session-data-redis</artifactId>
		</dependency>
		
		<dependency>
			<groupId>biz.paluch.redis</groupId>
			<artifactId>lettuce</artifactId>
			<version>4.3.1.Final</version>
		</dependency>


Redis Configuration:
--------------------
Redis-x64-3.2.100.msi : D:\Software
C:\Program Files\Redis : cmd as administrator
redis-server.exe
redis-server.exe redis.windows.conf

Redis Java Class:
package com.bookstore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
public class HttpSessionConfig {
	
	@Bean
	public LettuceConnectionFactory connectionFactory() {
		return new LettuceConnectionFactory();
	}
}

Database:
---------
UPDATE `bookstoreapi`.`user` SET `enabled`=1 WHERE `id`='1';
UPDATE `bookstoreapi`.`user` SET `enabled`=1 WHERE `id`='2';


