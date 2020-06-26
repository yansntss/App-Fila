import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/Usuario.service';
import { CadastroFilaPage } from '../../adm/cadastro-fila/cadastro-fila';



/**
 * Generated class for the FilaAtualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fila-atual',
  templateUrl: 'fila-atual.html',
})
export class FilaAtualPage {
  public usuarioLogado: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuarioService) {
      this.usuarioLogado = this.usuarioService.retornarUsuarioLogado();
    }
  ionViewDidLoad() {
    let type = this.usuarioLogado.tipo
    console.log(type);
    if(type != 'false'){
      this.navCtrl.setRoot(CadastroFilaPage);
      }
}


}
