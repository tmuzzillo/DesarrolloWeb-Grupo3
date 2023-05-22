package edu.utn.grupo3.reservas.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "estadosEspacio")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class EstadoEspacio extends ObjetDB{
    private String nombre;
}
