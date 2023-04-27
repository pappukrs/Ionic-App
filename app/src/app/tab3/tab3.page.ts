import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { io, Socket } from 'socket.io-client';
import {AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
   data:any;
   socket: Socket;
  url = 'ws://localhost:9000';
  constructor(private apiService:ApiService,private alertController:AlertController,private router:Router) {
    this.data=[];
    this.socket=io(this.url);
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getList();
}

 getList(){
     this.apiService.getAllList().subscribe((res:any)=>{
      this.data=[...res]
      console.log(res,"res");
      console.log("data",this.data);
     })
 }

 onView(id:any){
  console.log("onView",id);
   this.router.navigate(['list']);
 }
 onDelete(id:any){
  this.showAlert(id);
 }
 onUpdate(id:any){
   alert("update");
   
 }

 async showAlert(id:any){
  const alert=await this.alertController.create({
    header:"Confirm",
    
    message:"Are you really want to Delete ?",
    buttons:[{
      text:"cancel",
      handler: () =>{
       console.log("Cancelled");
      }
    },
    {
      text:"yes",
      handler: () =>{
        this.apiService.deleteSingleList(id).subscribe((res)=>{

        })
      }
    }
    
  ]
  });
  await alert.present()
 }

}
