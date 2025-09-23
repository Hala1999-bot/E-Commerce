import { CartService } from './../cart/services/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { Product } from '../../core/models/products/product.interface';
import { ProductsService } from '../../core/services/products/products.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly ngxSpinnerService = inject(NgxSpinnerService);
  private readonly cartService = inject(CartService);
  productList: Product[] = [];
  text: string = ' ';
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this.getAllProductsData();
  }
  getAllProductsData(pageNumber: number = 1) {
    this.productsService.getAllProducts(pageNumber).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.limit;
        this.total = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
