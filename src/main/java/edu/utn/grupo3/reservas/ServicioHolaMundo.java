package edu.utn.grupo3.reservas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class ServicioHolaMundo implements iHolaMundoService {

    public String saludar() {
        return "Hola";
    }

    public String despedir() {
        return "Bye";
    }
}
