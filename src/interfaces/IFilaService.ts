import { Fila } from "../models/Fila";

export interface IFilaService{
  criarFila(fila: Fila)  : boolean;

  buscarFila(id: number) : Fila;

  listarFilas() : Array<Fila>;

  totalFilas()  : number;
}