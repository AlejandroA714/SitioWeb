import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { shareReplay, map, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Crypter } from 'src/services/crypter.service';
import { ComunicationService } from 'src/services/comunication.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class navbarComponent {
  
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload() {
    Crypter.saveKey();
    return true;
  }
  
  constructor(private breakpointObserver: BreakpointObserver, private Route: ActivatedRoute, private Router: Router,
              private ComunicationService: ComunicationService, private changeDetector:ChangeDetectorRef, public loader: LoadingBarService) {}

  
  IS_HANDED: Observable<boolean> = this.breakpointObserver.observe( [ Breakpoints.Handset,Breakpoints.Small  ] )
                                  .pipe(
                                        map(result => result.matches ),
                                        shareReplay()
                                  );

  SIDEBAR_ACTIVE: Observable<boolean> = this.ComunicationService.toogle_sidebar.EVENT$;

  ngAfterViewInit(): void {

    this.Router.events.pipe(
      filter( (evt) => evt instanceof NavigationEnd)
    ).subscribe(()=> this.sidebarToogle())
    this.sidebarToogle()
    this.changeDetector.detectChanges();
  }

  sidebarToogle(){
    if(['file','settings','reports','unathorized'].includes(this.Route.snapshot.firstChild.url[0].path)){
      this.ComunicationService.toogle_sidebar.perfom(true);
    }else{
      this.ComunicationService.toogle_sidebar.perfom(false);
    }
  }
  
                                
}
