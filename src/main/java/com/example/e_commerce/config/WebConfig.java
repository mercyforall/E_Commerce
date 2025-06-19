package com.example.e_commerce.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;  

@Configuration
public class WebConfig  implements WebMvcConfigurer {

    // Add your web-related configuration here
    // For example, you can override methods to customize view resolvers, interceptors, etc.
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Adjust the allowed origins as needed
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

}
