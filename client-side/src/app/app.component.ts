import { Component } from "@angular/core";
import * as io from "socket.io-client";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  messageText: string;
  messages: Array<any>;
  socket: SocketIOClient.Socket;
  id: any;

  constructor() {
    this.socket = io.connect("http://localhost:3000");
    this.socket.on("event2", (data: any) => {
      console.log(data);
    });
  }

  invoque() {
    this.socket.on(this.id, (data: any) => {
      console.log(data);
    });
  }
}
