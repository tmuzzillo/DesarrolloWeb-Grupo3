package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.EstadoReserva;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Transactional
public interface RepositorioEstadoReserva extends CrudRepository<EstadoReserva,Integer> {
    Optional<EstadoReserva> findById(Integer id);
}
