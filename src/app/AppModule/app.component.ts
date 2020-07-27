import { Component, HostListener } from '@angular/core';
import { Crypter } from '../../services/crypter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor(){ Crypter.loadKey(); }
  
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(evt) {
    Crypter.saveKey();
    return true;
  }
}
