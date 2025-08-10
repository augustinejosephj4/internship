import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  async getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }
  
  async getProductById(id: string) {
    const res = await fetch('https://fakestoreapi.com/products/'+id); // 
    return await res.json();
  }
}
