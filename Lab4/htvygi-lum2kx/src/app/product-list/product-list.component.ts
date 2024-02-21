import { Component } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from '@kolkov/ngx-gallery';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  galleryOptions: NgxGalleryOptions[] = [
    {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
      imagePercent: 100,
      thumbnailsPercent: 20,
      thumbnailsMargin: 10,
      thumbnailMargin: 10,
    },
    // Add more options as needed
  ];

  share(productIndex: number) {
    const product = this.products[productIndex];
    window.location.href = product.website;
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

  getGalleryImages(images: string[] | undefined): NgxGalleryImage[] {
    return images ? images.map(image => ({ small: image, medium: image, big: image })) : [];
  }
}

