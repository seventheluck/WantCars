package com.wantcars;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
@MapperScan("com.wantcars.mapper")
public class WantCarsApplication {
    @Value("${spring.application.name:WantCars~~}")
    private String name;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    public static void main(String[] args) {
        ConfigurableApplicationContext res = SpringApplication.run(WantCarsApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            logger.info("Let's inspect the beans provided by Spring Boot:");

            String[] beanNames = ctx.getBeanDefinitionNames();
            Arrays.sort(beanNames);
            for (String beanName : beanNames) {
                logger.info(beanName);
            }
            logger.info("************" + name +" is running now!**************");
        };
    }
}
