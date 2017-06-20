import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { WelcomeComponent } from '../home/welcome.component';
import { PageNotFoundComponent } from '../page-not-found.component';


@NgModule({
  imports: [
     RouterModule.forRoot([
      //Order matters from top to bottom
      { path: 'welcome', component: WelcomeComponent },
      //Example of a redirect: { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
      { path:'', redirectTo: 'welcome', pathMatch:'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
