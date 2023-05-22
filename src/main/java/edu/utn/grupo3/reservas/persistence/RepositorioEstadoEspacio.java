package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.EstadoEspacio;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface RepositorioEstadoEspacio extends CrudRepository<EstadoEspacio,Integer> {
    Optional<EstadoEspacio> findById(Integer id);
}
