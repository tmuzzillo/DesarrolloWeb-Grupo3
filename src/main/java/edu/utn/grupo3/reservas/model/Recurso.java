package edu.utn.grupo3.reservas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.NonFinal;


@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
@Entity
@Data
@RequiredArgsConstructor
public class Recurso {

    @Id
    @NonNull
    private Integer id;
    @NonNull
    private String nombre;
    @NonNull
    private String descripcion;

}
