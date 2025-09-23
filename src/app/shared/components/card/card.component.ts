import { log } from 'console';
import { CartService } from './../../../features/cart/services/cart.service';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/models/products/product.interface';
import { RouterLink } from '@angular/router';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { OnSalePipe } from '../../pipes/on-sale-pipe';
import { TermPipe } from '../../pipes/term-pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink, OnSalePipe, DatePipe, TermPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) product: Product = {} as Product;
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);
  data = new Date();

  addProductItemToCart(id: string): void {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status === 'sucess') {
          this.toastrService.success(res.massage, 'FreshCart');
        }
        console.log(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
