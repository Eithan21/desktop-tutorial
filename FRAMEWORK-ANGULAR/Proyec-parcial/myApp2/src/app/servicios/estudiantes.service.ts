import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
    public baseUrl = "http://localhost:3000/estudiantes";
    constructor(private httpClient: HttpClient) { 
    }
    public getestudiantes(): Observable<any> {
      return this.httpClient.get(this.baseUrl);
    }
  }