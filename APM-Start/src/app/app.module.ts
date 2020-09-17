import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'
import { StarComponent } from './shared/star.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products',component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '',redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**',redirectTo:'welcome'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
