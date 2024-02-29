import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FindCepService } from 'src/app/service/find-cep.service';
import { ButtonProps } from 'src/app/types/button/button.types';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {

  invalidCep = false;

  buttonProps: ButtonProps = { text: 'Enviar', type: 'secondary' }

  subscribeForm!: FormGroup;

constructor(private cepService: FindCepService) { }

ngOnInit(): void {
  this.subscribeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    cep: new FormControl(''),
    address: new FormControl(''),
    neighborhood: new FormControl(''),
    city: new FormControl(''),
    complement: new FormControl(''),
    state: new FormControl(''),
  })
}

get name(){
  return this.subscribeForm.get('name')!;
}

get lastName(){
  return this.subscribeForm.get('lastName')!;
}

get email(){
  return this.subscribeForm.get('email')!;
}

get phone(){
  return this.subscribeForm.get('phone')!;
}

findCep(cep: string){
  console.log(cep)
  if (cep !== null) {
    this.cepService.findCep(cep)
      .subscribe(res => this.fillFormFields(res))
  }
}

fillFormFields(cep: any){
  if(Object.values(cep).length === 0) this.invalidCep = true;

  this.subscribeForm.get('address')?.setValue(cep.logradouro);
  this.subscribeForm.get('city')?.setValue(cep.localidade);
  this.subscribeForm.get('state')?.setValue(cep.uf);
  this.subscribeForm.get('neighborhood')?.setValue(cep.bairro);
}

invalidEmail(){
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const email = this.subscribeForm.get('email')?.value
  return !re.test(email) && this.subscribeForm.get('email')?.touched
}

submitForm(){
  if(this.subscribeForm.valid){
    window.alert('Formulário enviado com sucesso!')
  }
}
}
