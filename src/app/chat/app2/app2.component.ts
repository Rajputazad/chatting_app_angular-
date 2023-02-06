import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss'],
})
export class App2Component {
  constructor(private chatapi: ChatService) {}
  chats: any = [];
  ngOnInit() {
    setInterval(() => {
      this.receivemessage();
    }, 1000);
  }
  myForm: any = new FormGroup({
    Username: new FormControl('dipen'),
    Chat: new FormControl(''),
  });
  check = false;
  ngDoCheck() {
    // if(this.check==true){
    // this.receivemessage()
    // }
  }
  ngOnChanges() {}
  receivemessage() {
    this.chatapi.getmessage().subscribe((res: any) => {
      this.chats = res.data;
      // console.log(this.chats);
    });
  }
  val: any = null;
  send() {
    //   const data:any={
    //     Username:"azad",
    // Chat:vale
    //   }
    this.chatapi.msgsend(this.myForm.value).subscribe((res: any) => {
      // this.chats=res.data
      // console.log(res);
      this.myForm.get('Chat').reset();
      this.ngOnInit();
    });
  }
}
