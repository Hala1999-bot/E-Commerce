import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import path from 'path';
import { Component } from '@angular/core';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductsComponent } from './features/products/products.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { DetailsComponent } from './features/details/details.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { authGuard } from './core/guards/auth-guard';
import { isLoogedGuard } from './core/guards/is-looged-guard';
import { OrdersComponent } from './features/allorders/allorders.component';
import { ForgotpasswordComponent } from './core/auth/forgotpassword/forgotpassword.component';
import { features } from 'process';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    // canActivate: [isLoogedGuard],
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./core/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
        title: 'Login Page',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./core/auth/register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'Register Page',
      },
      {
        path: 'forgot',
        loadComponent: () =>
          import('./core/auth/forgotpassword/forgotpassword.component').then(
            (c) => c.ForgotpasswordComponent
          ),
        title: 'ForgotPassword Page',
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    // canActivate: [authGuard],

    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
        title: 'Home Page',
      },
      { path: 'cart', component: CartComponent, title: 'Cart Page' },
      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products Page',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./features/brands/brands.component').then(
            (c) => c.BrandsComponent
          ),
        title: 'Brands Page',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./features/categories/categories.component').then(
            (c) => c.CategoriesComponent
          ),

        title: 'Categories Page',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./features/allorders/allorders.component').then(
            (c) => c.OrdersComponent
          ),

        title: 'Allorders Page',
      },
      {
        path: 'details/:id/:slug',
        loadComponent: () =>
          import('./features/details/details.component').then(
            (c) => c.DetailsComponent
          ),
        title: 'Details Page',
      },

      {
        path: 'checkout/:id',
        loadComponent: () =>
          import('./features/checkout/checkout.component').then(
            (c) => c.CheckoutComponent
          ),

        title: 'Checkout Page',
      },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'NotFound Page' },
];
