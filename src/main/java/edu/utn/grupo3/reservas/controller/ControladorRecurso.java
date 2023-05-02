package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.service.IRecursoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recursos")
@RequiredArgsConstructor

public class ControladorRecurso {

    private final IRecursoService service;

    @GetMapping("/{ID}")
    public Recurso get(@PathVariable("ID") Integer id){
        //return new Recurso(1, "Proyector", "50X60");
        return this.service.get(id);
    }
}
