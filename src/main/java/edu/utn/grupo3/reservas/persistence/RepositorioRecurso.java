package edu.utn.grupo3.reservas.persistence;

import edu.utn.grupo3.reservas.model.Recurso;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface RepositorioRecurso extends CrudRepository<Recurso,Integer>, PagingAndSortingRepository<Recurso,Integer> {
    Optional<Recurso> findById(Integer id);
    List<Recurso> findAll();
    Page<Recurso> findAll(Pageable p);


}
