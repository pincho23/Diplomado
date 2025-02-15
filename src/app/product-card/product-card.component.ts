import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-product-card',
  imports: [RouterModule, MatListModule, CommonModule, MatCard, MatCardActions, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() producto: any;
  /* @Output() addToCartEvent = new EventEmitter<any>(); */ 

  constructor(private productService: ProductService) {}

  addToCart(event: MouseEvent) {
    event.stopPropagation(); 
    this.productService.addToCart(this.producto);
  }
}
