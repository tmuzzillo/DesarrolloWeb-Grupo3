package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Estado;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface RepositorioEstado extends CrudRepository<Estado,Integer> {
    Optional<Estado> findById(Integer id);
}
