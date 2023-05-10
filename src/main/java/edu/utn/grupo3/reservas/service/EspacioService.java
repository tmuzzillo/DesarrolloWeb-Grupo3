package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.persistence.RepositorioEspacio;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EspacioService implements IEspacioService {
    @Autowired
    private final RepositorioEspacio repositorio;
    @Override
    public Espacio get(Integer id) {
        Optional<Espacio> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }
}
