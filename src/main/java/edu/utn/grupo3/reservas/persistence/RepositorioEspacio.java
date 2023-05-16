package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RepositorioEspacio extends CrudRepository<Espacio,Integer> {
    Optional<Espacio> findById(Integer id);

    List<Espacio> findAll();

    List<Espacio> findAllByNombreIgnoreCaseContains(String nombre);

    List<Espacio> findAllByCapacidad(String capacidad);

    List<Espacio> findAllByNombreIgnoreCaseContainsAndCapacidad(String nombre, String capacidad);
}