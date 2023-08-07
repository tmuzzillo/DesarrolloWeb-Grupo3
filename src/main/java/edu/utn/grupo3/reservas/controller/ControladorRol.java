package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.model.Rol;
import edu.utn.grupo3.reservas.service.RolService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorRol {
    @Autowired
    private RolService rolService;

    @PostMapping("/registerRol")
    public Rol registerRol(@RequestBody Rol Rol) {
        return rolService.registerRol(Rol);
    }

    @GetMapping("/getRoles")
    public List<Rol> getRoles(){
        return rolService.getRoles();
    }

    @DeleteMapping("/deleteRol")
    public void deleteRol(@RequestParam Integer id) {
        rolService.deleteRol(id);
    }

    @PutMapping("/updateRoles")
    public Rol updateRol(@RequestBody Rol Rol) {
        return  rolService.updateRol(Rol);
    }

    @GetMapping
    public ResponseEntity<Page<Rol>> listarRoles(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Rol> roles = this.rolService.getTodosPaginado(pageable);

        return ResponseEntity.ok(roles);
    }
}