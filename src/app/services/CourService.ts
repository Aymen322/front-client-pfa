import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cour } from '../models/Cour';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  private apiUrl = 'http://localhost:7070/cours';

  constructor(private http: HttpClient) { }

  getAllCours(): Observable<Cour[]> {
    return this.http.get<Cour[]>(this.apiUrl);
  }

  getCourById(id: number): Observable<Cour> {
    return this.http.get<Cour>(`${this.apiUrl}/${id}`);
  }

  createCour(cour: Cour): Observable<Cour> {
    return this.http.post<Cour>(this.apiUrl, cour);
  }

  updateCour(cour: Cour): Observable<Cour> {
    return this.http.put<Cour>(`${this.apiUrl}/${cour.id}`, cour);
  }

  deleteCour(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
