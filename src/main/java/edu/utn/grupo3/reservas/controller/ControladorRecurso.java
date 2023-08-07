package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.service.IRecursoService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

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

    @GetMapping("/todos")
    public List<Recurso> getTodos(){
        return this.service.getTodos();
    }

    @PostMapping()
    public Recurso guardar(@RequestBody Recurso r){
        return this.service.guardar(r);
    }

    @GetMapping
    public ResponseEntity<Page<Recurso>> listarRecursos(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Recurso> recursos = this.service.getTodosPaginado(pageable);

        return ResponseEntity.ok(recursos);
    }
}
