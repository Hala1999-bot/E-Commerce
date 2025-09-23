import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/products/product.interface';
import { ProductsService } from '../../../../core/services/products/products.service';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-popular-products',
  imports: [CardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  productList: Product[] = [];
  ngOnInit(): void {
    this.getAllProductsData();
  }
  getAllProductsData() {
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
