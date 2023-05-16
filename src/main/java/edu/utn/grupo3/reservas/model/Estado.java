package edu.utn.grupo3.reservas.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "estados")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Estado extends ObjetDB{
    private String nombre;
}
