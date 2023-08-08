package edu.utn.grupo3.reservas.service;

import edu.utn.grupo3.reservas.model.Reserva;
import edu.utn.grupo3.reservas.model.view.ReservaDateDto;
import edu.utn.grupo3.reservas.persistence.RepositorioReserva;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ValidationService {

    List<Reserva> reservasExistente = new ArrayList<>();

    @Autowired
    RepositorioReserva repositorioReserva;

    //validar si la reserva esta dentro de una fecha de reserva disponible
    public boolean validarFechaReserva(String fecha, String horaDesde, String horaHasta){
        LocalDateTime horaDesdeDate = LocalDateTime.parse(horaDesde);
        LocalDateTime horaHastaDate = LocalDateTime.parse(horaHasta);

        reservasExistente = repositorioReserva.findByFecha(fecha);

        if (reservasExistente.isEmpty()) {
            // No hay reservas existentes para la fecha.
            return true;
        }

        List<ReservaDateDto> reservasExistentesDate = parseHoras(reservasExistente);

        for (ReservaDateDto reservaExistente : reservasExistentesDate) {

            if (horaDesdeDate.isBefore(reservaExistente.getHoraHasta())
                    && horaHastaDate.isAfter(reservaExistente.getHoraDesde())) {
                // Hay un conflicto de horario con otra reserva existente.
                return false;
            }

        }
        // No hay conflictos de horario con reservas existentes.
        return true;
    }

    public static List<ReservaDateDto> parseHoras(List<Reserva> reserva){
        List<ReservaDateDto> reservaDateDto = new ArrayList<ReservaDateDto>();
        //for every reserva in the list of reservas parse the horaDesde and horaHasta to Date and return a ReservaDateDto
        for (Reserva reserva1 : reserva) {
            reservaDateDto.add(parseHora(reserva1));
        }
        return reservaDateDto;
    }

    public static ReservaDateDto parseHora(Reserva reserva){
        ReservaDateDto reservaDateDto = new ReservaDateDto();
        reservaDateDto.setHoraDesde(LocalDateTime.parse(reserva.getHoraDesde()));
        reservaDateDto.setHoraHasta(LocalDateTime.parse(reserva.getHoraHasta()));
        return reservaDateDto;
    }

}
