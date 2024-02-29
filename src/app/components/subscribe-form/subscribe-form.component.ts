import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDownService } from 'src/app/service/drop-down.service';
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

constructor(private cepService: FindCepService, private dropDown: DropDownService) { }

ngOnInit(): void {

}

findCep(cep: string){
  console.log(cep)
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

submitForm(){

}
}
