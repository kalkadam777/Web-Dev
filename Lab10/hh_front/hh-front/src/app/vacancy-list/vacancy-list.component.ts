import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../module';
import { VacancyService } from '../vacancy.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId!: number; 

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.companyId = +params.get('id')!; 
      if (this.companyId) {
        this.getVacanciesByCompany(this.companyId);
      } else {
        this.getAllVacancies();
      }
    });
  }

  getAllVacancies() {
    this.vacancyService.getVacancies().subscribe(
      (data: Vacancy[]) => {
        this.vacancies = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  getVacanciesByCompany(companyId: number) {
    this.vacancyService.getVacanciesByCompany(companyId).subscribe(
      (data: Vacancy[]) => {
        this.vacancies = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

