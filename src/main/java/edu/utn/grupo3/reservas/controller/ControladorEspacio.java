package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.service.IEspacioService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/espacios")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorEspacio {

    private final IEspacioService service;

    @GetMapping("/{ID}")
    public Espacio get(@PathVariable("ID") Integer id){
        return this.service.get(id);
    }

    @GetMapping("/todos")
    public List<Espacio> getTodos(){
        return this.service.getTodos();
    }

    @PostMapping()
    public Espacio guardar(@RequestBody Espacio r){
        return this.service.guardar(r);
    }

    @PutMapping("/{ID}")
    public Espacio actualizar(@PathVariable("ID") Integer id,@RequestBody Espacio r){
        return this.service.actualizar(r);
    }

    @DeleteMapping("/{ID}")
    public String eliminar(@PathVariable("ID") Integer id){
        return this.service.eliminar(id);
    }

    @GetMapping(value = "/search",params={"nombre"})
    public List<Espacio> getFiltroNombre(@RequestParam(name="nombre",required = true)String nombre){
        return this.service.getFiltroNombre(nombre);
    }
    @GetMapping(value = "/search",params={"capacidad"})
    public List<Espacio> getFiltroCapacidad(@RequestParam(name="capacidad",required = true)String capacidad){
        return this.service.getFiltroCapacidad(capacidad);
    }

    @GetMapping(value = "/search",params={"nombre","capacidad"})
    public List<Espacio> getFiltroNombreCapacidad(@RequestParam(name="nombre",required = true)String nombre,
                                                  @RequestParam(name="capacidad",required= true)String capacidad){
        return this.service.getFiltroNombreCapacidad(nombre,capacidad);
    }


}
