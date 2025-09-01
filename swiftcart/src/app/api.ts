import { Injectable } from '@angular/core';

interface ProductRaw {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: {
    name: string;
  };
}

@Injectable({ providedIn: 'root' })
export class Api {

  async getProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    const data: ProductRaw[] = await res.json();

    const products = data.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      image: p.images?.[0] ?? 'assets/default.jpg',
      category: p.category?.name ?? 'Uncategorized'
    }));

    return products;
  }

  async getProductById(id: number | string) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product with ID ${id}: ${res.statusText}`);
    }

    const p = await res.json();

    return {
      id: p.id,
      title: p.title ?? 'Untitled',
      price: p.price ?? 0,
      description: p.description ?? 'No description available',
      image: p.images?.[0] ?? p.thumbnail ?? 'assets/default.jpg',
      category: p.category?.name ?? 'Uncategorized',
      rating: p.rating ?? { rate: 0, count: 0 }
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
}