import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FindCepService } from 'src/app/service/find-cep.service';
import { ButtonProps } from 'src/app/types/button/button.types';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  buttonProps: ButtonProps = { text: 'Enviar', type: 'secondary' }

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

constructor(private cepService: FindCepService) { }

ngOnInit(): void {}

findCep(cep: string){
  if (cep !== null) {
    this.cepService.findCep(cep)
      .subscribe(res => this.fillFormFields(res))
  }
}

fillFormFields(cep: any){
  this.subscribeForm.get('address')?.setValue(cep.logradouro);
  this.subscribeForm.get('city')?.setValue(cep.localidade);
  this.subscribeForm.get('state')?.setValue(cep.uf);
  this.subscribeForm.get('neighborhood')?.setValue(cep.bairro);
}

invalidPhone(){
  return this.subscribeForm.get('phone')?.invalid && this.subscribeForm.get('phone')?.touched
}

invalidEmail(){
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const email = this.subscribeForm.get('email')?.value
  return !re.test(email) && this.subscribeForm.get('email')?.touched
}

submitForm(){

}
}
