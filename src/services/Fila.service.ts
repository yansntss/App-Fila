import { IFilaService } from "../interfaces/IFilaService";
import { Fila } from "../models/Fila";
import { Injectable } from "@angular/core";
@Injectable()

export class FilaService implements IFilaService{
  criarFila(fila: Fila): boolean {
    throw new Error("Method not implemented.");
  }  buscarFila(id: number): Fila {
    throw new Error("Method not implemented.");
  }
  listarFilas(): Fila[] {
    throw new Error("Method not implemented.");
  }
  totalFilas(): number {
    throw new Error("Method not implemented.");
  }

  
}