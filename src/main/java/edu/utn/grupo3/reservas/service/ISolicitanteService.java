package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.SolicitanteDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISolicitanteService {
    Solicitante registerSolicitante(SolicitanteDto e);

    Solicitante updateSolicitante(SolicitanteDto e);

    String deleteSolicitante(Integer id);

    List<Solicitante> getSolicitantes();

    Page<Solicitante> getTodosPaginado(Pageable p);
}
