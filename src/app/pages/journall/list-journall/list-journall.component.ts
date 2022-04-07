import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journall } from '../../../@core/data/Journall';
import { JournallService } from '../../../@core/service/journall.service';

@Component({
  selector: 'ngx-list-journall',
  templateUrl: './list-journall.component.html',
  styleUrls: ['./list-journall.component.scss'],providers:[]
})
export class ListJournallComponent implements OnInit { 
listJournall:Journall[];
id:string;
ListDesIdTypeJournal:string[]=[];
 
  constructor(private journallService:JournallService , private router:Router) {
   }
  ngOnInit(): void {
    this.journallService.getAllJournall().subscribe(data=>{
      this.listJournall=data;
      console.log(this.listJournall)
      // this.listJournall.forEach(element => {
      //   console.log(element)
      //   this.ListDesIdTypeJournal.push(element.idTypeJournal)
                
      // });
      
    })
    // console.log("listOfIds",this.ListDesIdTypeJournal);
    // this.ListDesIdTypeJournal.forEach(element => {
    //   this.serviceTypeJournal.getOneTypeJournal(element).subscribe(data=>{
    //     console.log(data);
    //   })
      
    // });
  }
  ajouter(){
    this.router.navigate(["/pages/journall/ajouter"])
  }
 
  delete(id: string) {
    this.journallService.delete(id).subscribe(data=>{
   
      console.log(data)
    })
  }
  update(){
  this.router.navigate(["/pages/journall/modifier"])}
  // update(id: string, journal:Journall) {
  //   this.journallService.update(id,journal).subscribe(data=>{
   
  //     console.log(data)
  //   })
  // }
}