import { Component } from '@angular/core';
import { Card } from '../../common/card/card';
import { Api } from '../../api';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
 

  constructor(private api: Api) { }
   items: any[] = [];

 async ngOnInit() {
  this.items = await this.api.getProducts();
}



}
