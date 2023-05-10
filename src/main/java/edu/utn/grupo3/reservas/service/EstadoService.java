package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Estado;
import edu.utn.grupo3.reservas.persistence.RepositorioEspacio;
import edu.utn.grupo3.reservas.persistence.RepositorioEstado;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EstadoService implements IEstadoService {
    @Autowired
    private final RepositorioEstado repositorio;
    @Override
    public Estado get(Integer id) {
        Optional<Estado> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }
}
