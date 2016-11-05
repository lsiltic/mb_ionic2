import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class Podaci {

  constructor(public events: Events, public storage: Storage) {}

  set_welcome()
  {
    this.storage.set('welcome', true);
  }


}
