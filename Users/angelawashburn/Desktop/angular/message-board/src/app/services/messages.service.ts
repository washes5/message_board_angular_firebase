import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MessagesService {

  constructor(private afd: AngularFireDatabase) { }

//Posts a message to the database.
postMessage(messageTitle, messageContent){
  return this.afd.list('messages').push( {title: messageTitle, content: messageContent} );
}

//Query all messages in the database.
getAllMessages() {
  return this.afd.database.ref('messages').once('value').then( allMessagesFromDB => {
    return allMessagesFromDB.val();
  }).catch( err => { console.log('Error retrieving all messages: ${err}');});
}

}
