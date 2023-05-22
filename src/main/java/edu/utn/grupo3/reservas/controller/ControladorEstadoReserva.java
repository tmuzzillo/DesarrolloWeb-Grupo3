package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.EstadoReserva;
import edu.utn.grupo3.reservas.service.IEstadoReservaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/estadosReserva")
@RequiredArgsConstructor
public class ControladorEstadoReserva {

    private final IEstadoReservaService service;

    @GetMapping("/{ID}")
    public EstadoReserva get(@PathVariable("ID") Integer id){
        return this.service.get(id);
    }

    @PostMapping()
    public EstadoReserva guardar(@RequestBody EstadoReserva e){
        return this.service.guardar(e);
    }
}
