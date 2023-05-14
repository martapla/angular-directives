import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users Register';
  message = "";
  registered = false;
  name: string = "";
  surname: string = "";
  entries: { name: string }[];  // or: entries: any[];

  constructor() {
    this.entries = [
      { name: "Blue flower" },
      { name: "Yellow flower" },
      { name: "Orange flower" },
      { name: "Pink flower" },
    ];
  }

  registerUser() {
    this.registered = true;
    this.message = "User Registered!";
    
  }
  
}


