package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.SolicitanteDto;

import java.util.List;

public interface ISolicitanteService {
    Solicitante registerSolicitante(SolicitanteDto e);

    Solicitante updateSolicitante(SolicitanteDto e);

    String deleteSolicitante(Integer id);

    List<Solicitante> getSolicitantes();
}
