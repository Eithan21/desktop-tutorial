import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasServiceService {
  public baseUrl = "http://localhost:3000/materias";
  constructor(private httpClient: HttpClient) { 
  }
  public getmaterias(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
