import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare function jump(): any;
declare function move(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){
    
  }
  
  ngOnInit() {
    let source = new EventSource('http://localhost:8080/button-click');
    
    source.addEventListener('message', message => {
      console.log('Received button click event');
      
      console.log(message);
    });
  }
}
