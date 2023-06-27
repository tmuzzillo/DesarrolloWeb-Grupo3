package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.SolicitanteDto;
import edu.utn.grupo3.reservas.service.SolicitanteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorSolicitante {
    @Autowired
    private SolicitanteService SolicitanteService;

    @PostMapping("/registerSolicitante")
    public Solicitante registerSolicitante(@RequestBody SolicitanteDto solicitanteDto) {
        return SolicitanteService.registerSolicitante(solicitanteDto);
    }

    @GetMapping("/getSolicitantes")
    public List<Solicitante> getSolicitantes(){
        return SolicitanteService.getSolicitantes();
    }

    @DeleteMapping("/deleteSolicitante")
    public void deleteSolicitante(@RequestParam Integer id) {
        SolicitanteService.deleteSolicitante(id);
    }

    @PutMapping("/updateSolicitantes")
    public Solicitante updateSolicitante(@RequestBody SolicitanteDto solicitanteDto) {
        return  SolicitanteService.updateSolicitante(solicitanteDto);
    }
}