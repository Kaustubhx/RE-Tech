import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorepageComponent } from './pages/explorepage/explorepage.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ProjectdetailpageComponent } from './pages/projectdetailpage/projectdetailpage.component';

const routes: Routes = [
  { path: 'explore', component: ExplorepageComponent },
  { path: 'project/:id', component: ProjectdetailpageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
