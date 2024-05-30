import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormateurDetailComponent } from './formateur-detail/formateur-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formation-details/:id', component: FormationDetailComponent } ,
  { path: 'formateur-details/:id', component: FormateurDetailComponent } 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // Set scrollPositionRestoration to 'top'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
