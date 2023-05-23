package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Reserva;

import java.util.List;

public interface IReservaService {
    public Reserva get(Integer id);

    List<Reserva> getTodos();

    Reserva guardar(Reserva e);

    Reserva actualizar(Reserva e);

    String eliminar(Integer id);
}