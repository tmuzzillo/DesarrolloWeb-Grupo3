package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Rol;
import edu.utn.grupo3.reservas.persistence.RepositorioRol;
import lombok.RequiredArgsConstructor;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RolService implements IRolService{
    @Autowired
    private RepositorioRol rolRepository;

    @Override
    public Rol registerRol(Rol rol) {
        return rolRepository.save(rol);
    }
    @Override
    public List<Rol> getRoles(){
        return (List<Rol>) rolRepository.findAll();
    }

    @Override
    public String deleteRol(Integer id) {
        rolRepository.deleteById(id);
        return "Se ha eliminado correctamente";
    }
    @Override
    public Rol updateRol(Rol rol) {
        Integer id = rol.getId();
        Rol r = rolRepository.findById(id).get();
        r.setNombre(rol.getNombre());
        return rolRepository.save(r);
    }

}
