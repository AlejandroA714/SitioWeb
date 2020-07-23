import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { shareReplay, map, filter } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class navbarComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private ROUTER: Router,private ROUTE: ActivatedRoute) {}

  IS_HANDED: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
                                  .pipe(
                                        map(result =>  result.matches ),
                                        shareReplay()
                                  );

  SIDEBAR_ACTIVE: Observable<boolean> = this.ROUTER.events
                                        .pipe(
                                          filter((evt) => evt instanceof NavigationEnd ),
                                          map((result) => { return ['file','settings','reports'].includes(this.ROUTE.snapshot.firstChild.url[0].path)}),
                                          shareReplay()                  
                                        ) 

  ngOnInit(): void {
    this.ROUTER.navigate(['app',this.ROUTE.snapshot.firstChild.url[0].path]);
  }              
                                
}
