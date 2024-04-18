import { Component, OnInit } from '@angular/core';
import { Company } from '../module';
import { CompanyService } from '../company.service';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) {} 

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        this.companies = data;
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }

  navigateToVacancies(companyId: number | undefined) {
    if (companyId !== undefined) {
      this.router.navigate(['/companies', companyId, 'vacancies']);
    }
  }
}