package edu.utn.grupo3.reservas.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*") // Permitir todos los métodos: GET, POST, PUT, DELETE, etc.
                .allowedHeaders("*") // Permitir todas las cabeceras
                .exposedHeaders("X-Total-Count"); // Exponer las cabeceras requeridas
    }
}

