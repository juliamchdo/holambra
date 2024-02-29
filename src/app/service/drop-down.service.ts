import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatesBR } from '../types/states/states.types';
import { CitiesBR } from '../types/citites/citites.types'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http: HttpClient) { }

  getStatesBr() {
    return this.http.get<StatesBR[]>('assets/data/states.json');
  }

  getCitites(StateID: number) {
    return this.http.get<CitiesBR[]>('assets/data/citites.json')
    .pipe(
      map((cidades: CitiesBR[]) => cidades.filter(c => c.estado == StateID))
    );
  }
}
