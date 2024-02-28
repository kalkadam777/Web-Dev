import { Component } from '@angular/core';
import {categories, Category} from "../category";
import {ActivatedRoute} from "@angular/router";

// import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = [...products];
  category :  { id: number; name: string; products: {id: number, name: string, price: number, description: string, image: string, address: string, rating: string; like: number}[] } | undefined
  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }
  removeProduct(ind: number) {
    if (this.category) {
      this.category.products = this.category.products.filter((x) => x.id !== ind);
    }
  }
  share() {
    window.alert('The product has been shared!');
  }
  addLike(product: any) {
    product.like += 1;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  shareOnTelegram(sellerUsername: string, messageText: string) {
    if (this.category && this.category.products) {
      const productName = encodeURIComponent(this.category.products[0].name); // Example, assuming there's at least one product
      window.open(`https://telegram.me/share/url?url=${productName}&text=${productName}`);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

