package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.EstadoEspacio;
import edu.utn.grupo3.reservas.persistence.RepositorioEstadoEspacio;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EstadoEspacioService implements IEstadoEspacioService {
    @Autowired
    private final RepositorioEstadoEspacio repositorio;
    @Override
    public EstadoEspacio get(Integer id) {
        Optional<EstadoEspacio> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }

    @Override
    public EstadoEspacio guardar(EstadoEspacio e) {
        return repositorio.save(e);
    }
}
