import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppMaterialModule } from './app.material.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavBarComponent,
    HeroSectionComponent,
    ProductsComponent,
    FormComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
