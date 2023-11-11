import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailFacture } from '../../../@core/data/DetailFacture';
import { FactureDetailService } from '../../../@core/data/factureDetail.service';

@Component({
  selector: 'ngx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
idDetails:string
details:DetailFacture[]
  constructor(private activatedRoute:ActivatedRoute ,private serviceFacture:FactureDetailService) {}

  ngOnInit(): void {
   this.idDetails= this.activatedRoute.snapshot.params.id
   console.log(this.idDetails)
    this.serviceFacture.getDetailsByIdFacture(this.idDetails).subscribe(res=>{
      console.log(res)
      this.details=res
    })
  }

}
