import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ProjectdetailpageComponent } from './pages/projectdetailpage/projectdetailpage.component';

const routes: Routes = [
  { path: 'project', component: ProjectdetailpageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
