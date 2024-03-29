package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.SolicitanteDto;
import edu.utn.grupo3.reservas.service.SolicitanteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/solicitantes")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorSolicitante {
    @Autowired
    private SolicitanteService solicitanteService;

    @PostMapping("/registerSolicitante")
    public Solicitante registerSolicitante(@RequestBody SolicitanteDto solicitanteDto) {
        return solicitanteService.registerSolicitante(solicitanteDto);
    }

    @GetMapping("/todos")
    public List<Solicitante> getSolicitantes(){
        return solicitanteService.getSolicitantes();
    }

    @DeleteMapping("/deleteSolicitante")
    public void deleteSolicitante(@RequestParam Integer id) {
        solicitanteService.deleteSolicitante(id);
    }

    @PutMapping("/updateSolicitantes")
    public Solicitante updateSolicitante(@RequestBody SolicitanteDto solicitanteDto) {
        return  solicitanteService.updateSolicitante(solicitanteDto);
    }

    @GetMapping
    public ResponseEntity<List<Solicitante>> listarSolicitantes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Solicitante> solicitantesPage = this.solicitanteService.getTodosPaginado(pageable);
        List<Solicitante> solicitantes = solicitantesPage.getContent();

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("X-Total-Count", Long.toString(solicitantesPage.getTotalElements()));

        return ResponseEntity.ok().headers(responseHeaders).body(solicitantes);
    }
}