import { Component } from '@angular/core';
import { talkWithChatGPT } from 'src/app/util/open-ai';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  entrada:string="";
  response:string="";
  async consultar(){
    await talkWithChatGPT(this.entrada).then((data)=>{
      this.response=data!;
    });
  }
}
