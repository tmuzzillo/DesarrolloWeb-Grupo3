package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.persistence.RepositorioRecurso;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecursoService implements IRecursoService{
    @Autowired
    private final RepositorioRecurso repositorio;

    @Override
    public Recurso get(Integer id) {
        Optional<Recurso> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }

    @Override
    public List<Recurso> getTodos() {
        return repositorio.findAll();
    }

    @Override
    public Recurso guardar(Recurso r) {
        return repositorio.save(r);
    }

    @Override
    public Iterable<Recurso> getTodosPaginado(Pageable p) {
        return repositorio.findAll(p);
    }


}
