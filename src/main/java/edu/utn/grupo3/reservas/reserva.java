package edu.utn.grupo3.reservas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class reserva {

    @Autowired
    private iHolaMundoService servicio;

    @GetMapping("/saludar")
    public String saludar() {
        return servicio.saludar();
    }

    @GetMapping("/despedir")
    public String despedir() {
        return servicio.despedir();
    }

    @GetMapping(value = "/hello", params = {"name"})
    public String hello(@RequestParam("name") String nombre) {
        return "hello" + nombre;
    }

    @GetMapping(value = "/hello/{nombre}")
    public String hello1(@PathVariable("nombre") String nombre) {
        return "hello 1" + " "+ nombre;
    }
}
