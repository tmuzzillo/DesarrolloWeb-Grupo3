package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Estado;
import edu.utn.grupo3.reservas.service.IEspacioService;
import edu.utn.grupo3.reservas.service.IEstadoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estados")
@RequiredArgsConstructor
public class ControladorEstado {

    private final IEstadoService service;

    @GetMapping("/{ID}")
    public Estado get(@PathVariable("ID") Integer id){
        return this.service.get(id);
    }
}
