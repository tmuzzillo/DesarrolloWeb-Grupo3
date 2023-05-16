package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.persistence.RepositorioEspacio;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
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

    @Override
    public List<Espacio> getTodos() {
        return repositorio.findAll();
    }

    @Override
    public Espacio guardar(Espacio e){
        return repositorio.save(e);
    }
    @Override
    public Espacio actualizar(Espacio e){
        return repositorio.save(e);
    }

    @Override
    public String eliminar(Integer id) {
        repositorio.deleteById(id);
        return "Se ha eliminado correctamente";
    }

    @Override
    public List<Espacio> getFiltroNombre(String nombre) {
        return repositorio.findAllByNombreIgnoreCaseContains(nombre);
    }

    @Override
    public List<Espacio> getFiltroCapacidad(String capacidad) {
        return repositorio.findAllByCapacidad(capacidad);
    }

    @Override
    public List<Espacio> getFiltroNombreCapacidad(String nombre, String capacidad) {
        return repositorio.findAllByNombreIgnoreCaseContainsAndCapacidad(nombre, capacidad);
    }
}
