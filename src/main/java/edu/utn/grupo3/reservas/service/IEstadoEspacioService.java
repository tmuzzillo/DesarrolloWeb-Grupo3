package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.EstadoEspacio;

public interface IEstadoEspacioService {
    public EstadoEspacio get(Integer id);

    EstadoEspacio guardar(EstadoEspacio e);
}
