package edu.utn.grupo3.reservas.handlers;

import edu.utn.grupo3.reservas.exceptions.ReservaConflictException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(ReservaConflictException.class)
    public ResponseEntity<String> handleReservaConflictException(ReservaConflictException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }

}
