import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { FilasPage } from '../cliente/filas/filas';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public usuario: Usuario = new  Usuario();
  

  email: String;
  senha: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, 
    public usuarioService: UsuarioService,  public usuarioServices: UsuarioService) {
      console.log(localStorage);
  
  }
  ionViewDidLoad() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(false);
  }

  abrirCadastroUsuario(){
    this.navCtrl.push(CadastroPage);
  }
  
  logaUsuario(){

    let emailloga=this.usuario.email;
    console.log(emailloga);
    
    let senhaloga=this.usuario.senha;
    console.log(senhaloga);

    let resposta1: boolean= this.usuarioServices.logar(this.usuario);
    if (resposta1) this.navCtrl.setRoot(FilasPage);
    else this.navCtrl.setRoot(CadastroPage);
   
}

}
