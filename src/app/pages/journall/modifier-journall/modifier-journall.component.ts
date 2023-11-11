import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Journall } from "../../../@core/data/Journall";
import { JournallService } from "../../../@core/service/journall.service";

@Component({
  selector: "ngx-modifier-journall",
  templateUrl: "./modifier-journall.component.html",
  styleUrls: ["./modifier-journall.component.scss"],
})
export class ModifierJournallComponent implements OnInit {
  id: string;
  Journall: Journall = new Journall();

  constructor(
    private journallService: JournallService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.journallService.getJournallId(this.id).subscribe(
      (data) => {
        this.Journall = data;
      },
      (error) => {
        console.log(error);
        this.goToJournalList();
      }
    );
  }
  onSubmit() {
    this.journallService.update(this.id, this.Journall).subscribe(
      (data) => {
        this.goToJournalList();
      },
      (error) => console.log(error)
    );
  }

  deleteJournal() {
    this.journallService.delete(this.Journall.id).subscribe((data) => {
      console.log(data);
      this.goToJournalList();
    });
  }

  goToJournalList() {
    this.router.navigate(["/pages/journall/journall"]);
  }
}

//   modifierJournall():void {
//     this.journallService.create(this.Journall).subscribe(
//       response => {
//         console.log(response);
//         this.submitted = true;
//       },
//       error => {
//         console.log(error);
//       });
// }
//   annuler(){
//     this.router.navigate(["/pages/journall/journall"])
//   }
// }
