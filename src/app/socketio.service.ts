import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  private contadorSource = new BehaviorSubject<any>("");
  public contador$ = this.contadorSource.asObservable();

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('my message', 'Hello there from Angular.');

    this.socket.on('my broadcast', (data: string) => {
      this.contadorSource.next(data);
      this.socket.emit('my message', data);
      console.log(data);
    });
  }

  resetSocket() {
    this.socket.emit('reset', 0);
  }
}
