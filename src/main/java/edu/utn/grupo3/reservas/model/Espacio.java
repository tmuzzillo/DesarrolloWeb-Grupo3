package edu.utn.grupo3.reservas.model;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.List;


@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Table(name = "espacios")
public class Espacio extends ObjetDB {
    private String nombre;
    private Integer capacidad;

    @ManyToMany
    private List<Recurso> recursos;
    @ManyToOne
    private Estado estados;
}
