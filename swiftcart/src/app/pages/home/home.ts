import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../common/card/card';
import { Api } from '../../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Card, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  items: any[] = [];           
  filtered: any[] = [];       
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private api: Api, private route: ActivatedRoute) {}

  async ngOnInit() {
    const data = await this.api.getProducts();

    const normalized = data.map((p: any) => ({
      id: p.id,
      title: p.title ?? 'Untitled',
      price: p.price ?? 0,
      description: p.description ?? 'No description available',
      image: p.image ?? 'assets/default.jpg',
      category: p.category ?? 'Uncategorized',
      rating: p.rating ?? { rate: 0, count: 0 }
    }));

    this.items = normalized;
    this.filtered = normalized; 

    this.categories = ['All', ...Array.from(new Set(normalized.map(p => p.category)))];

    
    this.route.queryParams.subscribe(params => {
      const q = params['q']?.toLowerCase() || '';
      this.filtered = q
        ? this.items.filter(p => p.title.toLowerCase().includes(q))
        : this.items;
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}