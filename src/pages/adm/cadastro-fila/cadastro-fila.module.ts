import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFilaPage } from './cadastro-fila';

@NgModule({
  declarations: [
    CadastroFilaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFilaPage),
  ],
})
export class CadastroFilaPageModule {}
