package edu.utn.grupo3.reservas.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "estadosReserva")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class EstadoReserva extends ObjetDB{
    private String nombre;
    private String fechaHoraCambio;
}
