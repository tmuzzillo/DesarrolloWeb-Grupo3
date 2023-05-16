package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Estado;
import edu.utn.grupo3.reservas.model.Recurso;

public interface IEstadoService {
    public Estado get(Integer id);

    Estado guardar(Estado e);
}
