import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from './module';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = "http://127.0.0.1:8000"
  constructor(private client: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
      return this.client.get<Vacancy[]>(
          `${this.BASE_URL}/api/vacancies/`
      )
  }

  getVacanciesByCompany(id: number):Observable<Vacancy[]> {
      return this.client.get<Vacancy[]> (
          `${this.BASE_URL}/api/companies/${id}/vacancies/`
      )
  }
}