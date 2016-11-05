import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Mb } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Welcome } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    Mb,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Welcome
  ],
  imports: [
    IonicModule.forRoot(Mb)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Mb,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Welcome
  ],
  providers: []
})
export class AppModule {}
