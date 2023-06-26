import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductComponent } from './component/all-product/all-product.component';
import { ProductService } from './service/product.service';
import { SubProductComponent } from './component/sub-product/sub-product.component';
import { DetailsComponent } from './component/details/details.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllProductComponent,
    SubProductComponent,
    DetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
