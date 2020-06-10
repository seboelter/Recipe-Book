import { Component, OnInit } from '@angular/core';
// You can add html directly to the component
// Use backticks to create multiline html
@Component({
  selector: 'app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
