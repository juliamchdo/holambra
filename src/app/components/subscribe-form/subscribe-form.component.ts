import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonProps } from 'src/app/types/button/button.types';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  subscribe: ButtonProps = {
    text: 'Faça sua inscrição', type: 'primary', size: 'xl'
  }

  subscribeForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    cep: new FormControl(''),
    address: new FormControl(''),
    neighborhood: new FormControl(''),
    city: new FormControl(''),
    complement: new FormControl(''),
    state: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    
  }
}
