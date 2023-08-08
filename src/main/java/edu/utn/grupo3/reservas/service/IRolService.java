package edu.utn.grupo3.reservas.service;
import edu.utn.grupo3.reservas.model.Recurso;
import edu.utn.grupo3.reservas.model.Rol;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IRolService {
    Rol registerRol(Rol e);

    Rol updateRol(Rol e);

    String deleteRol(Integer id);

    List<Rol> getRoles();

    Page<Rol> getTodosPaginado(Pageable p);
}