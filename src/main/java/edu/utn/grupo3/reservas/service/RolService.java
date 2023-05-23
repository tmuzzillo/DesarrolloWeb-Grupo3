package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Rol;
import edu.utn.grupo3.reservas.persistence.RepositorioRol;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RolService implements IRolService {
    @Autowired
    private final RepositorioRol repositorio;

    @Override
    public Rol get(Integer id) {
        Optional<Rol> buscado = repositorio.findById(id);
        if (buscado.isPresent()){
            return buscado.get();
        }else{
            return null;
        }
    }

    @Override
    public List<Rol> getTodos() {
        return repositorio.findAll();
    }

    @Override
    public Rol guardar(Rol e){
        return repositorio.save(e);
    }
    @Override
    public Rol actualizar(Rol e){
        return repositorio.save(e);
    }

    @Override
    public String eliminar(Integer id) {
        repositorio.deleteById(id);
        return "Se ha eliminado correctamente";
    }

}
