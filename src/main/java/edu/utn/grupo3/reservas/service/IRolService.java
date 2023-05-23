package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Rol;

import java.util.List;

public interface IRolService {
    public Rol get(Integer id);

    List<Rol> getTodos();

    Rol guardar(Rol r);

    Rol actualizar(Rol r);

    String eliminar(Integer id);
}
