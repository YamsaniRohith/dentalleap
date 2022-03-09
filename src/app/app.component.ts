import { Component } from '@angular/core';
import { MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
//import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dentalleap';
  /*constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }*/
}
 
