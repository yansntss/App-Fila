import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroFilaPage } from '../pages/adm/cadastro-fila/cadastro-fila';
import { FilasCriadasPorVocePage } from '../pages/adm/filas-criadas-por-voce/filas-criadas-por-voce';
import { FilasPage } from '../pages/cliente/filas/filas';
import { FilaAtualPage } from '../pages/cliente/fila-atual/fila-atual';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CadastroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Criar Filas', component: CadastroFilaPage },
      { title: 'Suas Filas', component: FilasCriadasPorVocePage },
      { title: 'Filas', component: FilasPage },
      { title: 'Fila Atual', component: FilaAtualPage }





    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
