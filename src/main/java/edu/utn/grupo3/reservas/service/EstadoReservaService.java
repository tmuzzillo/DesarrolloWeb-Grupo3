package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.EstadoReserva;
import edu.utn.grupo3.reservas.persistence.RepositorioEstadoReserva;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EstadoReservaService implements IEstadoReservaService {
    @Autowired
    private final RepositorioEstadoReserva repositorio;
    @Override
    public EstadoReserva get(Integer id) {
        Optional<EstadoReserva> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }

    @Override
    public EstadoReserva guardar(EstadoReserva e) {
        return repositorio.save(e);
    }
}
