import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
