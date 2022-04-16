import { Component, OnInit} from "@angular/core";
import {  Router } from "@angular/router";
import { Journall } from '../../../@core/data/Journall';
import { JournallService } from '../../../@core/service/journall.service';

@Component({
  selector: 'ngx-ajouter-journall',
  templateUrl: './ajouter-journall.component.html',
  styleUrls: ['./ajouter-journall.component.scss'],providers:[]
})
export class AjouterJournallComponent implements OnInit {
  Journall:Journall= new Journall();
  // Journall :Journall= {
  //   id:'',
  //   isActif:false,
  //   designation:'',
  //   idTypeJournal:'',
  //   dateCreation:new Date(Date.now())
  
  // };
  // submitted = false;
  
  constructor(private journallService:JournallService,private router:Router) {}

  ngOnInit():void{}
  saveJournall(){
  this.journallService.create(this.Journall).subscribe( data =>{
    console.log(data);
    this.goToJournallList();
  },
  error => console.log(error));
}

goToJournallList(){
  this.router.navigate(['/pages/journall/journall']);
}

onSubmit(){
  console.log(this.Journall);
  this.saveJournall();
}
}

//    ajouterJournall():void {
//     const journall = {
//        id: this.Journall.id,
//        designation: this.Journall. designation,
//        idTypeJournal: this.Journall. idTypeJournal,
//        dateCreation: this.Journall. dateCreation

//     };
//     this.journallService.create(this.Journall)
//     .subscribe({
//       next: (res) => {
//         console.log(res);
//         this.submitted = true;
//       },
//       error: (e) => console.error(e)
//     });
// }
// annuler(){
//   this.router.navigate(["/pages/journall/journall"])
// }

// }