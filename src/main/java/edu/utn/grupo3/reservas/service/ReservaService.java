package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Reserva;
import edu.utn.grupo3.reservas.persistence.RepositorioReserva;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservaService implements IReservaService {
    @Autowired
    private final RepositorioReserva repositorio;

    @Override
    public Reserva get(Integer id) {
        Optional<Reserva> buscado = repositorio.findById(id);
        if (buscado.isPresent()) {
            return buscado.get();
        } else {
            return null;
        }
    }

    @Override
    public List<Reserva> getTodos() {
        return repositorio.findAll();
    }

    @Override
    public Reserva guardar(Reserva e) {
        return repositorio.save(e);
    }

    @Override
    public Reserva actualizar(Reserva e) {
        return repositorio.save(e);
    }

    @Override
    public String eliminar(Integer id) {
        repositorio.deleteById(id);
        return "Se ha eliminado correctamente";
    }
}