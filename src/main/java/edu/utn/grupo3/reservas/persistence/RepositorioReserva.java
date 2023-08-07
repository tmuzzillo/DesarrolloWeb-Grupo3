package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Reserva;
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
public interface RepositorioReserva extends CrudRepository<Reserva,Integer> {
    Optional<Reserva> findById(Integer id);

    List<Reserva> findAll();

    List<Reserva> findByFecha(String fecha);

    Page<Reserva> findAll(Pageable p);
}