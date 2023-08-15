import { Solicitante } from "./solicitante";
import { Espacio } from "./espacio";

export class Reserva {

    id:number;
    fecha:String;
    horaDesde:String;
    horaHasta:String;
    cantidadReserva:number;
    motivo:String;
    fechaHoraReserva:String;
    solicitantes:Solicitante;
    espacios:Espacio;

}