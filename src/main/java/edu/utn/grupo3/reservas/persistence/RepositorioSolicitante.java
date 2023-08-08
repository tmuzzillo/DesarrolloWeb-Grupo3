package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Solicitante;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RepositorioSolicitante extends CrudRepository<Solicitante,Integer> {
    List<Solicitante> findAll();

    Page<Solicitante> findAll(Pageable p);
}