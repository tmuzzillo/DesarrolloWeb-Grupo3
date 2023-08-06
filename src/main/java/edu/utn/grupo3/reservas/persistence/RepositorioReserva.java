package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Reserva;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RepositorioReserva extends CrudRepository<Reserva,Integer> {
    Optional<Reserva> findById(Integer id);

    List<Reserva> findAll();

    List<Reserva> findByFecha(String fecha);
}