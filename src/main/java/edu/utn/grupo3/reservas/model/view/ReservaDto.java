package edu.utn.grupo3.reservas.model.view;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ReservaDto {
    private Date fecha;
    private LocalDateTime horaDesde;
    private LocalDateTime horaHasta;
    private Integer cantidadReserva;
    private String motivo;
    private LocalDateTime fechaHoraReserva;
    private String solicitante;
    private String espacio;

}
