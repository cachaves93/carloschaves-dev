import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './pages/home/home.component';
import { SideProjectsComponent } from './pages/side-projects/side-projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'curriculum-vitae', component: CurriculumVitaeComponent },
  { path: 'side-projects', component: SideProjectsComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
