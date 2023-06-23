package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.Solicitante;

import java.util.List;

public interface ISolicitanteService {
    Solicitante registerSolicitante(Solicitante e);

    Solicitante updateSolicitante(Solicitante e);

    String deleteSolicitante(Integer id);

    List<Solicitante> getSolicitantes();
}
