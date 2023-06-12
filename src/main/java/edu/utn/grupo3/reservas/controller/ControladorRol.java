package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Rol;
import edu.utn.grupo3.reservas.service.RolService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorRol {
    @Autowired
    private RolService RolService;

    @PostMapping("/registerRol")
    public Rol registerRol(@RequestBody Rol Rol) {
        return RolService.registerRol(Rol);
    }

    @GetMapping("/getRoles")
    public List<Rol> getRoles(){
        return RolService.getRoles();
    }

    @DeleteMapping("/deleteRol")
    public void deleteRol(@RequestParam Integer id) {
        RolService.deleteRol(id);
    }

    @PutMapping("/updateRoles")
    public Rol updateRol(@RequestBody Rol Rol) {
        return  RolService.updateRol(Rol);
    }
}