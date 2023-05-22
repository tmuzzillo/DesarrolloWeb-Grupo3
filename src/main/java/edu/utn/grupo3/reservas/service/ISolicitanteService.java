package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;

import java.util.List;

public interface ISolicitanteService {
    Solicitante get(Integer id);

    List<Solicitante> getTodos();

    Solicitante guardar(Solicitante s);

    Solicitante actualizar(Solicitante s);

    String eliminar(Integer id);
}
