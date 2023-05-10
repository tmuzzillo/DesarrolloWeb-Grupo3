package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.service.EspacioService;
import edu.utn.grupo3.reservas.service.IEspacioService;
import edu.utn.grupo3.reservas.service.IRecursoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/espacios")
@RequiredArgsConstructor
public class ControladorEspacio {

    private final IEspacioService service;

    @GetMapping("/{ID}")
    public Espacio get(@PathVariable("ID") Integer id){
        return this.service.get(id);
    }
}
