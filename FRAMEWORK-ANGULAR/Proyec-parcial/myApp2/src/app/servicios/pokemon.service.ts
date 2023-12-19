import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50";
  constructor(private httpClient: HttpClient) { 
  }
  public getpokemon(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
