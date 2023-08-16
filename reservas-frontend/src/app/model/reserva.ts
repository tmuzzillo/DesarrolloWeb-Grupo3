import { Solicitante } from "./solicitante";
import { Espacio } from "./espacio";

export class Reserva {

    id:number;
    fecha:Date;
    horaDesde:Date;
    horaHasta:Date;
    cantidadReserva:number;
    motivo:String;
    fechaHoraReserva:Date;
    solicitantes:Solicitante;
    espacios:Espacio;

}