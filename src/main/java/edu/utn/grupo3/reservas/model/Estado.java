package edu.utn.grupo3.reservas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Entity
@Data
@Table(name = "estados")
@NoArgsConstructor(access = AccessLevel.PROTECTED, force = true)
public class Estado {
    @Id
    private Integer id;
    private String nombre;
}
