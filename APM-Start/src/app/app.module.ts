import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component'
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './app-router.module'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRouterModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
