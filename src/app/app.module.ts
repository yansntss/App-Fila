import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroFilaPage } from '../pages/adm/cadastro-fila/cadastro-fila';
import { FilasPage } from '../pages/cliente/filas/filas';
import { LoginPage } from '../pages/login/login';
import { FilasCriadasPorVocePage } from '../pages/adm/filas-criadas-por-voce/filas-criadas-por-voce';
import { FilaAtualPage } from '../pages/cliente/fila-atual/fila-atual';
import { UsuarioService } from '../services/Usuario.service';



@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    CadastroFilaPage,
    FilasPage,
    LoginPage,
    FilasCriadasPorVocePage,
    FilaAtualPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    CadastroFilaPage,
    FilasPage,
    LoginPage,
    FilasCriadasPorVocePage,
    FilaAtualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
