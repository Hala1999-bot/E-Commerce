import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from '../cart/services/cart.service';
import { CategoriesService } from './../../core/services/categories/categories.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../cart/models/cart.interface';

@Component({
  selector: 'app-categories',
  imports: [NgxPaginationModule, FormsModule, CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  addAllCartData(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private readonly categoriesService = inject(CategoriesService);

  categoriesList: Category[] = [];
  categoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  product: any;
  data: any;
  catrgory: any;

  ngOnInit(): void {
    this.getAllCategoriesData();
  }
  getAllCategoriesData() {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoriesList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
