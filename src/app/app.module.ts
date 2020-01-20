import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { BoxComponent } from './components/home/box/box.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ProductListComponent } from './components/home/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { CouponSectionComponent } from './components/cart/coupon-section/coupon-section.component';
import { CheckOutSectionComponent } from './components/cart/check-out-section/check-out-section.component';
import { CartHeaderComponent } from './components/cart/cart-header/cart-header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductHeaderComponent } from './components/product/product-header/product-header.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { CategoriesHeaderComponent } from './components/product-categories/categories-header/categories-header.component';
import { CategoriesProductsComponent } from './components/product-categories/categories-products/categories-products.component';
import { CategoriesFilterComponent } from './components/product-categories/categories-filter/categories-filter.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { CheckoutHeaderComponent } from './components/checkout-page/checkout-header/checkout-header.component';
import { CheckoutFormComponent } from './components/checkout-page/checkout-form/checkout-form.component';
import { PaymentComponent } from './components/checkout-page/payment/payment.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BoxComponent,
    CategoriesComponent,
    ProductListComponent,
    CartComponent,
    CartProductComponent,
    CouponSectionComponent,
    CheckOutSectionComponent,
    CartHeaderComponent,
    ProductComponent,
    ProductHeaderComponent,
    ProductDetailsComponent,
    ProductCategoriesComponent,
    CategoriesHeaderComponent,
    CategoriesProductsComponent,
    CategoriesFilterComponent,
    CheckoutPageComponent,
    CheckoutHeaderComponent,
    CheckoutFormComponent,
    PaymentComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
