import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '',redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**',redirectTo:'welcome'}
    ]),
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
