import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'welcome.html'
})
export class Welcome {

  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Dobrodošli u aplikaciju <b>.mBistrica</b>',
        description: 'Aplikacija <b>.mBistrica</b> omoguća vam pregled svih događanja na području općine Marije Bistrice.',
        image: 'assets/img/slide_img_1.png',
      },
      {
        title: 'Navigacija unutar aplikacije',
        description: 'Aplikacija <b>.mBistrica</b> podjenjena je na 4 prozora (Događanja, Atrakcije, Hrana i piće, Smještaj).',
        image: 'assets/img/slide_img_2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/slide_img_3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
