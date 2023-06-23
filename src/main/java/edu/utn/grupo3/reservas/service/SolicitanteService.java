package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.persistence.RepositorioSolicitante;
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
    private RepositorioSolicitante solicitanteRepository;

    @Override
    public Solicitante registerSolicitante(Solicitante solicitante) {
        return solicitanteRepository.save(solicitante);
    }
    @Override
    public List<Solicitante> getSolicitantes(){
        return (List<Solicitante>) solicitanteRepository.findAll();
    }

    @Override
    public String deleteSolicitante(Integer id) {
        solicitanteRepository.deleteById(id);
        return "Se ha eliminado correctamente";
    }
    @Override
    public Solicitante updateSolicitante(Solicitante solicitante) {
        Integer id = solicitante.getId();
        Solicitante r = solicitanteRepository.findById(id).get();
        r.setNombre(solicitante.getNombre());
        r.setApellido(solicitante.getApellido());
        r.setDni(solicitante.getDni());
        r.setRoles(solicitante.getRoles());
        return solicitanteRepository.save(r);
    }
}