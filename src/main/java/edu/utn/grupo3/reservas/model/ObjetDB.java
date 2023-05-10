package edu.utn.grupo3.reservas.model;

import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

@MappedSuperclass
@Data
public class ObjetDB {
    @Id
    private Integer id;
}
