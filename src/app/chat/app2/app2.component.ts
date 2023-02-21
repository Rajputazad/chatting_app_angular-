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
  spin:any=""
offline=false
interval:any
wifi="fa fa-toggle-on"

clk2(){
  this.offline=  !this.offline
  this.ngOnInit();
  if(this.offline==true){
    this.wifi="fa fa-toggle-off"
    this.spin=""
    }else{
      this.wifi="fa fa-toggle-on"
    }
  }
  ngOnInit() {
    console.log(this.offline);

    if(this.offline==false){
      this.spin="fa-spin"
      this.interval=  setInterval(() => {
      this.receivemessage()
    }, 1000);}else{
      clearInterval(this.interval);
    }
  }
  myForm: any = new FormGroup({
    Username: new FormControl('yashvi'),
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
       this.spin=""
    });
  }
  val: any = null;
  send() {
    //   const data:any={
    //     Username:"azad",
    // Chat:vale
    //   }
    if(this.offline==true){
  alert("You are offline")
}else{
  this.chatapi.msgsend(this.myForm.value).subscribe((res:any)=>{
    // this.chats=res.data
    // console.log(res);
    this.myForm.get('Chat').reset();
    this.ngOnInit()
  })}
  }
  del(){
    this.chatapi.delete().subscribe((res=>{
      this.ngOnInit()
    }))
  }
}
