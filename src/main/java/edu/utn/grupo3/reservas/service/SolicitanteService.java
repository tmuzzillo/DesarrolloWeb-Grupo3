package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Solicitante;
import edu.utn.grupo3.reservas.model.view.SolicitanteDto;
import edu.utn.grupo3.reservas.persistence.RepositorioRol;
import edu.utn.grupo3.reservas.persistence.RepositorioSolicitante;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SolicitanteService implements ISolicitanteService {
    @Autowired
    private RepositorioSolicitante solicitanteRepository;
    @Autowired
    private RepositorioRol rolesRepository;
    private final ModelMapper mapper = new ModelMapper();
    @Override
    public Solicitante registerSolicitante(SolicitanteDto solicitanteDto) {
Solicitante solicitante = mapper.map(solicitanteDto, Solicitante.class);
solicitante.setRoles(rolesRepository.findById(solicitanteDto.getRoles()).get());
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
    public Solicitante updateSolicitante(SolicitanteDto solicitante) {
        Integer id = solicitante.getId();
        Solicitante r = solicitanteRepository.findById(id).get();
        r.setNombre(solicitante.getNombre());
        r.setApellido(solicitante.getApellido());
        r.setDni(solicitante.getDni());
        r.setRoles(rolesRepository.findById(solicitante.getRoles()).get());
        return solicitanteRepository.save(r);
    }

    @Override
    public Page<Solicitante> getTodosPaginado(Pageable p) {
        return solicitanteRepository.findAll(p);
    }
}