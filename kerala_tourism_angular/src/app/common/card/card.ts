import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title='no value';
  @Input() image='https://www.keralatourism.org/images/logo/logo.png';
  @Input() description='no value';
  

}
