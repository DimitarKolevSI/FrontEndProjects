import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
