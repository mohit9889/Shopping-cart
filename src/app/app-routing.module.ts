import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'categories', component: ProductCategoriesComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
