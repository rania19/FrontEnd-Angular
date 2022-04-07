import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Livraison} from '../models/Livraison';
import {InvestService} from '../services/InvestService';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.css']
})
export class LivraisonDetailComponent implements OnInit {

  liv: Livraison;
  constructor(private router: Router, private route: ActivatedRoute, private InvestService: InvestService) { }

  ngOnInit(): void {
    this.liv  = JSON.parse(this.route.snapshot.params['liv']);
    console.log("Selected one iss" + this.liv);

  }


  confirmLivraison() {
    this.InvestService.ConfirmLivraisons(this.liv).subscribe(
      data => {
        console.log(data);
       // this.reloadData();
        // }
        this.router.navigate(['EspaceLiv'])
          .then(() => {
            window.location.reload();
          });
      }

    );

  }
}
