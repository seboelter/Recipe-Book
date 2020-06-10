import { Component } from '@angular/core';
//css can be added directly to the styles tag, styles(urls) is an array that holds sheets, or multiline css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
