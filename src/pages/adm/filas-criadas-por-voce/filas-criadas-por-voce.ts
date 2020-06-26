import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/Usuario.service';
import { FilasPage } from '../../cliente/filas/filas';



/**
 * Generated class for the FilasCriadasPorVocePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filas-criadas-por-voce',
  templateUrl: 'filas-criadas-por-voce.html',
})
export class FilasCriadasPorVocePage {
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
