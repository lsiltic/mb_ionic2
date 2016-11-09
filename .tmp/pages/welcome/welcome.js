var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
export var Welcome = (function () {
    function Welcome(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
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
    Welcome.prototype.startApp = function () {
        this.navCtrl.push(TabsPage);
    };
    Welcome.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd;
    };
    Welcome.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    Welcome.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    Welcome = __decorate([
        Component({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/luka/Projects/ionic/mb/src/pages/welcome/welcome.html"*/'<div id="snow"></div>\n<ion-header no-shadow>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()">Preskoči</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n\n  <ion-slides [options]="{pager: true}" (ionWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-right large clear (click)="startApp()">\n\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/luka/Projects/ionic/mb/src/pages/welcome/welcome.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, MenuController])
    ], Welcome);
    return Welcome;
}());
//# sourceMappingURL=welcome.js.map