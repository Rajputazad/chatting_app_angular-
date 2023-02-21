import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient ) { }
  url="http://localhost:3337/"

  msgsend(data:any){

    return this.http.post(this.url+"Send",data,{
      withCredentials: true
  })
  }
getmessage(){
  return this.http.get(this.url+"chats",{
    withCredentials: true
})
}
delete(){
  return this.http.delete(this.url+"delete",{
    withCredentials: true
})
}

}
