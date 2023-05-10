package edu.utn.grupo3.reservas.model;

import jakarta.persistence.*;
import lombok.*;


import java.util.List;



@Entity
@Data
@Table(name = "recursos")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Recurso extends ObjetDB {
    @NonNull
    private String nombre;
    private String descripcion;
}
