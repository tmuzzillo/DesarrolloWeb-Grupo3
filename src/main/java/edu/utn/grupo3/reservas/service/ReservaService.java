package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.exceptions.ReservaConflictException;
import edu.utn.grupo3.reservas.model.Reserva;
import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.ReservaDto;
import edu.utn.grupo3.reservas.persistence.RepositorioEspacio;
import edu.utn.grupo3.reservas.persistence.RepositorioReserva;
import edu.utn.grupo3.reservas.persistence.RepositorioSolicitante;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Autowired
    private final RepositorioSolicitante repositorioSolicitante;
    @Autowired
    private final RepositorioEspacio repositorioEspacio;

    @Autowired
    private final ValidationService validationService;

    private final ModelMapper mapper = new ModelMapper();

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
    public Reserva guardar(ReservaDto e) throws ReservaConflictException {
        System.out.println(e);
            Reserva reserva = mapper.map(e,Reserva.class);
            reserva.setSolicitantes(repositorioSolicitante.findById(Integer.parseInt(e.getSolicitante())).get());
            reserva.setEspacios(repositorioEspacio.findById(Integer.parseInt(e.getEspacio())).get());
        boolean validacion = validationService.validarFechaReserva(reserva.getFecha(), reserva.getHoraDesde(), reserva.getHoraHasta());
        if (validacion){
            return repositorio.save(reserva);
        }
        throw new ReservaConflictException("La fecha de la reserva no es valida, tiene conflictos con otras reservas");
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

    @Override
    public Page<Reserva> getTodosPaginado(Pageable p) {
        return repositorio.findAll(p);
    }
}