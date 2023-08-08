package edu.utn.grupo3.reservas.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200/") // or specify the specific allowed origins
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("X-Total-Count") // Allow the required headers
                .exposedHeaders("X-Total-Count"); // Expose the required headers
    }
}
