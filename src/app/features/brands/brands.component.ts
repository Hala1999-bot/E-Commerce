import { Brand } from '../cart/models/cart.interface';
import { BrandsService } from './brands.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent implements OnInit {
  private readonly brandsService = inject(BrandsService);
  brandList: Brand[] = [];

  ngOnInit(): void {
    this.getAllBrandsData();
  }

  getAllBrandsData() {
    this.brandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.brandList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
