import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HomeComponent } from './home/home.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title:'Home' },
    { path: 'about', component: AboutComponent, title:'About' },
    { path: 'companies', component: CompanyListComponent, title:'companies' },  
    { path: 'vacancies', component: VacancyListComponent, title:'vacancies' },  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'companies/:id/vacancies', component: VacancyListComponent },
    { path: '**', component: NotFoundComponent, title:'404 Not Found'}
  ];
