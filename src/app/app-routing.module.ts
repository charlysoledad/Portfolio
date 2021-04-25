import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectComponent},
  {path: '**', pathMatch: 'full', redirectTo: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
