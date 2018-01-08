import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMessagesArray = [];



  constructor(private messagesService: MessagesService) {

  //Use MessageService to get all of the messages in the database.
  this.messagesService.getAllMessages().then( allMessages => {
    //When we get answer back, turn the answer into an array.
    Object.keys(allMessages).forEach( eachMessage => {
      //For each key (each individual message) we should push it onto the array.  Save the key too.
      this.allMessagesArray.push({
        key: eachMessage,
        title: allMessages[eachMessage]['title'],
        content: allMessages[eachMessage]['content']
      })
    })
  })  

 }

  ngOnInit() {
  }

}
