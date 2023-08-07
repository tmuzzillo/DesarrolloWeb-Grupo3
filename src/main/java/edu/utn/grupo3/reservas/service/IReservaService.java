package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.exceptions.ReservaConflictException;
import edu.utn.grupo3.reservas.model.Reserva;
import edu.utn.grupo3.reservas.model.Solicitante;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IReservaService {
    public Reserva get(Integer id);

    List<Reserva> getTodos();

    Reserva guardar(Reserva e) throws ReservaConflictException;

    Reserva actualizar(Reserva e);

    String eliminar(Integer id);

    Page<Reserva> getTodosPaginado(Pageable p);
}