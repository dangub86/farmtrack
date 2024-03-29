package onlus.manager.springbootvuejs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScans;

import onlus.manager.springbootvuejs.hibernate.service.SocioService;

// testing new master branch
@SpringBootApplication // another commit again in dev another time
public class SpringBootVuejsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootVuejsApplication.class, args);
	}
}
