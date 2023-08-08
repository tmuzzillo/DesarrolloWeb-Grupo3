package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.model.Rol;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RepositorioRol extends CrudRepository<Rol,Integer> {
    List<Rol> findAll();

    Page<Rol> findAll(Pageable p);
}