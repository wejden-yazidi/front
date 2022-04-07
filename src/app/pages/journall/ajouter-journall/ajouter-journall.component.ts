import { Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Journall } from '../../../@core/data/Journall';
import { JournallService } from '../../../@core/service/journall.service';

@Component({
  selector: 'ngx-ajouter-journall',
  templateUrl: './ajouter-journall.component.html',
  styleUrls: ['./ajouter-journall.component.scss'],providers:[]
})
export class AjouterJournallComponent implements OnInit {
  Journall:Journall;
  submitted = false;
  constructor(private journallService:JournallService,private router:Router) {}

  ngOnInit():void{}
  
   ajouterJournall():void {
    this.Journall = new Journall();
    // this.journall.id = this.route.snapshot.params['id'];
    this.journallService.create(this.Journall).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}
annuler(){
  this.router.navigate(["/pages/journall/journall"])
}

}


