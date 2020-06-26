import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { FilasPage } from '../../cliente/filas/filas';
import { UsuarioService } from '../../../services/Usuario.service';
import { Usuario } from '../../../models/Usuario';



/**
 * Generated class for the CadastroFilaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-fila',
  templateUrl: 'cadastro-fila.html',
})
export class CadastroFilaPage {
  public usuarioLogado: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,   
    public usuarioService: UsuarioService) {
      this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
    }
    ionViewDidLoad() {
      let type = this.usuarioLogado.tipo
      console.log(type);
      if(type != 'true'){
        this.navCtrl.setRoot(FilasPage);
        }
  }

}
