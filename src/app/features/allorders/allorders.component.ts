import { OrdersService } from './allorders.service';
// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment.development';

// @Component({
//   selector: 'app-allorders',
//   imports: [],
//   templateUrl: './allorders.component.html',
//   styleUrl: './allorders.component.css'
// })
// export class AllordersComponent {
// private readonly httpClient = inject(HttpClient);
// getAllOrders():Observable<any>{
//   return this.httpClient.get(environment.baseUrl +`orders/user${id}` )
// }
// }

// import { Component, OnInit, inject } from '@angular/core';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './allorders.component.html',
//   styleUrls: ['./allorders.component.css'],
// })
// export class OrdersComponent implements OnInit {
//   private readonly ordersService = inject(OrdersService);

//   orders: any[] = [];
//   loading = true;

//   ngOnInit(): void {
//     this.getOrders();
//   }

//   getOrders(): void {
//     this.ordersService.getAllOrders().subscribe({
//       next: (res) => {
//         this.orders = res.orders; // على حسب شكل الـ API
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching orders:', err);
//         this.loading = false;
//       },
//     });
//   }
// }

// import { Component, OnInit, inject } from '@angular/core';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './allorders.component.html',
//   styleUrls: ['./allorders.component.css'],
// })
// export class OrdersComponent implements OnInit {
//   private readonly ordersService = inject(OrdersService);

//   orders: any[] = [];
//   loading = true;

//   ngOnInit(): void {
//     this.getOrders();
//   }

//   getOrders(): void {
//     this.ordersService.getAllOrders().subscribe({
//       next: (res) => {
//         this.orders = res.orders || res.data || res; // حسب شكل الـ API
//         this.loading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching orders:', err);
//         this.loading = false;
//       },
//     });
//   }
// }
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ مهم
@Component({
  selector: 'app-orders',
  standalone: true, // لو component standalone
  imports: [CommonModule], // ✅ هنا ضيف CommonModule
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css'],
})
export class OrdersComponent implements OnInit {
  private readonly ordersService = inject(OrdersService);

  orders: any[] = [];
  loading = true;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.getAllOrders().subscribe({
      next: (res) => {
        this.orders = res.orders || res.data || res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
        this.loading = false;
      },
    });
  }
}

// زر ع
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Component({
//   selector: 'app-orders',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './allorders.component.html',
// })
// export class OrdersComponent implements OnInit {
//   orders: any[] = [];
//   loading = false;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getAllOrders();
//   }

//   getAllOrders(): void {
//     this.loading = true;

//     // لو عندك Token في LocalStorage
//     const token = localStorage.getItem('userToken');

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`,
//     });

//     this.http
//       .get<any[]>('https://ecommerce.routemisr.com/api/v1/orders', { headers })
//       .subscribe({
//         next: (res) => {
//           this.orders = res;
//           this.loading = false;
//         },
//         error: (err) => {
//           console.error('Error loading orders:', err);
//           this.loading = false;
//         },
//       });
//   }

//   // تحسين الأداء مع *ngFor
//   trackByOrderId(index: number, order: any): string {
//     return order._id;
//   }

//   trackByItemId(index: number, item: any): string {
//     return item._id || index.toString();
//   }

//   // زر عرض التفاصيل
//   openOrderDetails(order: any): void {
//     console.log('Order details:', order);
//     // هنا ممكن تفتحي Modal أو تنقلي لصفحة التفاصيل
//   }
// }
