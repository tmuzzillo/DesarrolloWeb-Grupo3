package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Rol;
import edu.utn.grupo3.reservas.service.RolService;
import edu.utn.grupo3.reservas.service.IRolService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorRol {

    private final IRolService service;

    @GetMapping("/{ID}")
    public Rol get(@PathVariable("ID") Integer id) {
        return this.service.get(id);
    }

    @GetMapping("/todos")
    public List<Rol> getTodos() {
        return this.service.getTodos();
    }

    @PostMapping()
    public Rol guardar(@RequestBody Rol r) {
        return this.service.guardar(r);
    }

    @PutMapping("/{ID}")
    public Rol actualizar(@PathVariable("ID") Integer id, @RequestBody Rol r) {
        return this.service.actualizar(r);
    }

    @DeleteMapping("/{ID}")
    public String eliminar(@PathVariable("ID") Integer id){
        return this.service.eliminar(id);
    }
}