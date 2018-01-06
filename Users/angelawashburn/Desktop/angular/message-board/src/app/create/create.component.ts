import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newMessageTitle = '';
  newMessageTitleFormControl = new FormControl();
  newMessageContent = '';
  newMessageContentFormControl = new FormControl();
  
  constructor() { }

  ngOnInit() {
  }

  createMessage() {
    // Ensure the form has been completed. If not, stop the function here.
    if (this.newMessageTitle.trim() === '' || this.newMessageContent.trim() === '') {
      return;
    }
    // Send the form off to Firebase.
    // TO DO
    // TO DO
    // TO DO
    console.log('Form contents are:');
    console.log(this.newMessageTitle);
    console.log(this.newMessageContent);
  }
 
 
}
