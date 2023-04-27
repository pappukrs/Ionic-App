import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
   id: string="";
   data={
    name:String,
    qualification:String,
    height:Number,
    weight:Number,
    gender:String,
    
   };
  constructor(private apiService:ApiService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.id=params['id']
    })
   }

  ngOnInit() {
    this.apiService.getSingleList(this.id).subscribe((res)=>{
     this.data={...res}
    })
  }

  getSingleTable(id:any){
    this.apiService.getSingleList(id).subscribe((res)=>{

    })
  }

}
