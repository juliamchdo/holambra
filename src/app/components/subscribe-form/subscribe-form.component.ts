import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

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
