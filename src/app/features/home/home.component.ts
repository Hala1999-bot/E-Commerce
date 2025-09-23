import { Product } from '../../core/models/products/product.interface';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { error } from 'node:console';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    MainSliderComponent,
    PopularCategoriesComponent,
    PopularProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly productsService = inject(ProductsService);
  productList: Product[] = [];
  getAllProductData(): void {
    this.productsService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
