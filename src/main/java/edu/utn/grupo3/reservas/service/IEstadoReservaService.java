package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.EstadoReserva;

public interface IEstadoReservaService {
    public EstadoReserva get(Integer id);

    EstadoReserva guardar(EstadoReserva e);
}
