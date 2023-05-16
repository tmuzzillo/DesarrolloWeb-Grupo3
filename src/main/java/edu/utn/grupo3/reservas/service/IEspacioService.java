package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Espacio;

import java.util.List;

public interface IEspacioService {
    public Espacio get(Integer id);

    List<Espacio> getTodos();

    Espacio guardar(Espacio r);

    Espacio actualizar(Espacio r);

    String eliminar(Integer id);

    List<Espacio> getFiltroNombre(String nombre);

    List<Espacio> getFiltroCapacidad(String capacidad);

    List<Espacio> getFiltroNombreCapacidad(String nombre, String capacidad);
}
