package edu.utn.grupo3.reservas.model.view;

import edu.utn.grupo3.reservas.model.Rol;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolicitanteDto {
    private String nombre;
    private String apellido;
    private Integer dni;
    private Integer roles;
}
