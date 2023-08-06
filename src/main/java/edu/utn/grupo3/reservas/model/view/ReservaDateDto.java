package edu.utn.grupo3.reservas.model.view;

import edu.utn.grupo3.reservas.model.Espacio;
import edu.utn.grupo3.reservas.model.EstadoReserva;
import edu.utn.grupo3.reservas.model.ObjetDB;
import edu.utn.grupo3.reservas.model.Solicitante;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
public class ReservaDateDto  {
    private Date fecha;
    private LocalDateTime horaDesde;
    private LocalDateTime horaHasta;
    private Integer cantidadReserva;
    private String motivo;
    private LocalDateTime fechaHoraReserva;

}
