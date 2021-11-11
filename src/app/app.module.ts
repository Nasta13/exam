import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
