package edu.utn.grupo3.reservas.controller;

import edu.utn.grupo3.reservas.exceptions.ReservaConflictException;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.model.Reserva;
import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.ReservaDto;
import edu.utn.grupo3.reservas.service.IReservaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorReserva {

    private final IReservaService service;

    @GetMapping("/{ID}")
    public Reserva get(@PathVariable("ID") Integer id) {
        return this.service.get(id);
    }

    @GetMapping("/todos")
    public List<Reserva> getTodos() {
        return this.service.getTodos();
    }

    @PostMapping()
    public Reserva guardar(@RequestBody ReservaDto r) throws ReservaConflictException {
         return this.service.guardar(r);
    }

    @PutMapping("/{ID}")
    public Reserva actualizar(@PathVariable("ID") Integer id, @RequestBody Reserva r) {
        return this.service.actualizar(r);
    }

    @DeleteMapping("/{ID}")
    public String eliminar(@PathVariable("ID") Integer id) {
        return this.service.eliminar(id);
    }

    @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Reserva> reservasPage = this.service.getTodosPaginado(pageable);

        List<Reserva> reservas = reservasPage.getContent();

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("X-Total-Count", Long.toString(reservasPage.getTotalElements()));

        return ResponseEntity.ok().headers(responseHeaders).body(reservas);
    }
}