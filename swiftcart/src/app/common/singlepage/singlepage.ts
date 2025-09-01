import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlepage',
  standalone: true,
  imports: [],
  templateUrl: './singlepage.html',
  styleUrls: ['./singlepage.css'] 
})
export class Singlepage {
  product: any = null;

  constructor(private api: Api, private route: ActivatedRoute, private router: Router,private location: Location) {}

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.product = await this.api.getProductById(id);
  }

  goToPayment() {
    this.router.navigate(['/payment'], {
      queryParams: {
        title: this.product.title,
        price: this.product.price
      }
    });
  }
  goBack() {
    this.location.back(); 
  }
}