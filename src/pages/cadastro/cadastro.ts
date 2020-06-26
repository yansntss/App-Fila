import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public usuario: Usuario = new  Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public usuarioServices: UsuarioService, public menu: MenuController) {
    console.log(this.usuario);
  }




  ionViewDidLoad() {
    this.menu.swipeEnable(false);
  }

  cadastrarUsuario(){
    let resposta: boolean= this.usuarioServices.criarUsuario(this.usuario);
    if (resposta) this.navCtrl.setRoot(LoginPage);
    else this.navCtrl.setRoot(CadastroPage);
  } 
  

  irParaLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
}
