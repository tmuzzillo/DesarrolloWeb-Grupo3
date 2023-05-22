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
@Table(name = "solicitantes")
public class Solicitante extends ObjetDB {
    private String nombre;
    private String apellido;
    private Integer dni;

    @ManyToOne
    private Rol roles;
}
