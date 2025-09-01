import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule,Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [CommonModule], 
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {
  title = '';
  price = 0;
  paymentDone = false;

  constructor(private route: ActivatedRoute,private location: Location )
  
   {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      
      this.price = +params['price'];
    });
  }

  completePayment() {
    
    this.paymentDone = true;
  }
  goBack() {
    this.location.back(); 
  }

}