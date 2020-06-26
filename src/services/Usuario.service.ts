import { IUsuarioService } from "../interfaces/IUsuarioService";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";
import { LoginPage } from "../pages/login/login";
import { CadastroPage } from "../pages/cadastro/cadastro";
@Injectable()

export class UsuarioService implements IUsuarioService{

  public usuarios:Array<Usuario>;
  navCtrl: any;

  constructor(){
      let listaUsuario = JSON.parse(localStorage.getItem("usuario"));
      this.usuarios = (listaUsuario)  ? listaUsuario : [];
  }



  criarUsuario(usuario: Usuario): boolean {
      if(!usuario.nome) throw new Error("Digite o seu nome");
      if(!usuario.email) throw new Error("Digite um email");
      if(!usuario.senha) throw new Error("Digite uma senha");
      if(!usuario.tipo) throw new Error("Escolha um tipo de conta");

      if(this.buscarUsuarioPorNome(usuario.nome))  throw new Error("Nome já cadastrado");
      if(this.buscarUsuarioPorEmail(usuario.email))  throw new Error("Email já cadastrado");
      usuario.id =  this.totalUsuarios() +1;

      this.usuarios.push(usuario);

      localStorage.setItem("usuario",JSON.stringify(this.usuarios));
      return true;      
  }  
  
  
  buscarUsuario(id: number): Usuario {
    let usuario: Usuario =  this.usuarios.find(u => u.id == id);
    return usuario;
  }
  buscarUsuarioPorEmail(email: String): Usuario {
    let usuario: Usuario =  this.usuarios.find(u => u.email == email);
    return usuario;
  }
  buscarUsuarioPorNome(nome: String): Usuario {
    let usuario: Usuario =  this.usuarios.find(u => u.nome == nome);
    return usuario;
  }
  listarUsuarios(): Usuario[] {
    return this.usuarios;
  }
  totalUsuarios(): number {
    return this.usuarios.length;
  }
  
  //LOGIN
  buscarLogin(email: String,senha: String){
    
    let usuario: Usuario =  this.usuarios.find(u => u.email == email) && this.usuarios.find(u => u.senha == senha);
    if(usuario==undefined){
      return false;
    }else{
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      return true
    }
    
  }
  
  logar(usuario: Usuario): boolean {
    if(this.buscarLogin(usuario.email,usuario.senha)==true){
      return true;
    } else{
      return false;
    }
  }
  retornarUsuarioLogado(): Usuario {
    let usuariologado: Usuario= JSON.parse(localStorage.getItem("usuarioLogado"))
    return usuariologado;
  }


}