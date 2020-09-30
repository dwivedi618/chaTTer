import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket: any;

  constructor() { }
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
   
}
  send(message){
    console.log("message service",message);
    this.socket.emit('message', message);
    this.socket.on('message',(msg)=>{
      console.log("result",msg);
    });
  }
}
