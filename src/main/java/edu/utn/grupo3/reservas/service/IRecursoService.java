package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Recurso;

import java.util.List;

public interface IRecursoService {

    public Recurso get(Integer id);

    List<Recurso> getTodos();

    Recurso guardar(Recurso r);
}
