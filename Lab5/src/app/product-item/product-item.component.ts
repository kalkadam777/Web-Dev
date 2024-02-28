import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product : {id: number, name: string, price: number, description: string, image: string, address: string, rating: string; };
  @Output() remove = new EventEmitter();

  like : number;
  // show : boolean;
  constructor() {
    this.like = 0;

    this.product = new class implements Product {
      // @ts-ignore
      id: number;
      // @ts-ignore
      name: string;
      // @ts-ignore
      price: number;
      // @ts-ignore
      description: string;
      // @ts-ignore
      image: string;
      // @ts-ignore

      address: string;
      // @ts-ignore
      rating: string;
      // @ts-ignore
      like: number

    }
  }
}
