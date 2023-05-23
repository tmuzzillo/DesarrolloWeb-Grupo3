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
@Table(name = "reservas")
public class Reserva extends ObjetDB {
    private String fecha;
    private String horaDesde;
    private String horaHasta;
    private Integer cantidadReserva;
    private String motivo;
    private String fechaHoraReserva;
    private String motivoRechazo;

    @ManyToOne
    private Solicitante solicitantes;
    @OneToOne
    private Espacio espacios;
    @ManyToOne
    private EstadoReserva estadosReserva;

}
