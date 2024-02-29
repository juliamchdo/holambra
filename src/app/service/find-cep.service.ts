import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindCepService {

  constructor(private http: HttpClient) { }

  findCep(cep: string) {
    if (cep) {
      const validateCep = /^[0-9]{8}$/;
      if (validateCep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }
}
