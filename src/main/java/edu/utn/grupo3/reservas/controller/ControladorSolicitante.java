package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.service.ISolicitanteService;
import edu.utn.grupo3.reservas.service.IRecursoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/solicitantes")
@RequiredArgsConstructor
public class ControladorSolicitante {

    private final ISolicitanteService service;

    @GetMapping("/{ID}")
    public Solicitante get(@PathVariable("ID") Integer id) {
        return this.service.get(id);
    }

    @GetMapping("/todos")
    public List<Solicitante> getTodos() {
        return this.service.getTodos();
    }

    @PostMapping()
    public Solicitante guardar(@RequestBody Solicitante r) {
        return this.service.guardar(r);
    }

    @PutMapping("/{ID}")
    public Solicitante actualizar(@PathVariable("ID") Integer id, @RequestBody Solicitante r) {
        return this.service.actualizar(r);
    }

    @DeleteMapping("/{ID}")
    public String eliminar(@PathVariable("ID") Integer id) {
        return this.service.eliminar(id);
    }
}