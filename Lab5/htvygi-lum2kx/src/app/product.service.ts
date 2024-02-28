import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    // Инициализируем категории и продукты здесь
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  likeProduct(categoryId: number, productId: number): void {
    const category = this.categories.find(c => c.id === categoryId);
    const product = category?.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  removeProduct(categoryId: number, productId: number): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.products = category.products.filter(p => p.id !== productId);
    }
  }
}
