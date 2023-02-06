import { Component } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppsComponent {
  constructor(private chatapi : ChatService){}
myForm:any = new FormGroup({
  Username: new FormControl('azad'),
    Chat: new FormControl('')
  });
  interval:any
spin:any=""
offline=false
  chats:any=[]
  ngOnInit(){
    console.log(this.offline);
    
    if(this.offline==false){
  this.spin="fa-spin"
  this.interval=  setInterval(() => {
  this.receivemessage()
}, 1000);}else{
  clearInterval(this.interval);
}
}
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
ngDoCheck(){
  // this.receivemessage()
}
ngOnChanges(){
    this.receivemessage()

  }
  receivemessage(){
this.chatapi.getmessage().subscribe((res:any)=>{
  this.chats=res.data
  this.spin=""
  // console.log(this.chats);
})
  }
  val:any=""
send(){
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
}
