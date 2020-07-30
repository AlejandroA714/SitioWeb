import { Component, HostListener } from '@angular/core';
import { Crypter } from 'src/services/crypter.service';
import { TimerService } from 'src/services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  constructor(){ Crypter.loadKey(); new TimerService() }
  
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(evt) {
    Crypter.saveKey();
    return true;
  }
}
