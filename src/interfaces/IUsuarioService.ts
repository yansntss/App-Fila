import { Usuario } from "../models/Usuario";

export interface IUsuarioService{
  criarUsuario(usuario: Usuario) : boolean;

  buscarUsuario(id: number) : Usuario;

  listarUsuarios() : Array<Usuario>;

  buscarUsuarioPorEmail(email: String) : Usuario;

  logar(usuario: Usuario) :void;

  totalUsuarios() : number;

  retornarUsuarioLogado() : Usuario;


}