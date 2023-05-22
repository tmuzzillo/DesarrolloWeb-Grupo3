package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.EstadoEspacio;
import edu.utn.grupo3.reservas.service.IEstadoEspacioService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/estadosEspacio")
@RequiredArgsConstructor
public class ControladorEstadoEspacio {

    private final IEstadoEspacioService service;

    @GetMapping("/{ID}")
    public EstadoEspacio get(@PathVariable("ID") Integer id){
        return this.service.get(id);
    }

    @PostMapping()
    public EstadoEspacio guardar(@RequestBody EstadoEspacio e){
        return this.service.guardar(e);
    }
}
