import { Component, OnInit } from '@angular/core';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameToDisplay = '';

  constructor() { }

  ngOnInit() {
  }

  login() {
    //Hey, the login function ran!
    //Set the 'nameToDisplay' variable equal to the answer from a prompt popup
    this.nameToDisplay = window.prompt('Please enter your name:');
  }

  logout() {
    //Hey, the logout function ran!
    //Clear the 'nameToDisplay' variable.
    this.nameToDisplay = '';
  }
}
