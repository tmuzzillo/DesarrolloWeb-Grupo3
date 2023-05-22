package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.persistence.RepositorioSolicitante;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SolicitanteService implements ISolicitanteService {
    @Autowired
    private final RepositorioSolicitante repositorio;

    @Override
    public Solicitante get(Integer id) {
        Optional<Solicitante> buscado = repositorio.findById(id);
        if (buscado.isPresent()) {
            return buscado.get();
        } else {
            return null;
        }
    }

    @Override
    public List<Solicitante> getTodos() {
        return repositorio.findAll();
    }

    @Override
    public Solicitante guardar(Solicitante s) {
        return repositorio.save(s);
    }

    @Override
    public Solicitante actualizar(Solicitante s) {
        return repositorio.save(s);
    }

    @Override
    public String eliminar(Integer id) {
        repositorio.deleteById(id);
        return "Se ha eliminado correctamente";
    }
}