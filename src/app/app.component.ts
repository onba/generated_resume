import { Component, OnInit, Output } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume';
  matTabGroupWidth: number = 0;
  
  ngOnInit() {
    this.matTabGroupWidth = (document.getElementById('mattabgroup') as HTMLElement).clientWidth ;
 }
}
