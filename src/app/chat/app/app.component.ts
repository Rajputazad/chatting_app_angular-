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
spin:any=""
  chats:any=[]
  ngOnInit(){
  this.spin="fa-spin"
    setInterval(() => {
  this.receivemessage()
}, 1000);
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
  this.chatapi.msgsend(this.myForm.value).subscribe((res:any)=>{
    // this.chats=res.data
    // console.log(res);
    this.myForm.get('Chat').reset();
    this.ngOnInit()
  })
}
}
