import { Component, OnInit } from '@angular/core';
import { PrizeItems } from 'src/app/types/awards/award.types';
import { ButtonProps } from 'src/app/types/button/button.types';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  prizeItems: PrizeItems[] = [
    {iconClass: 'first', place: '1º lugar', value: 'R$ 5.000,00 + troféu'},
    {iconClass: 'second', place: '2º lugar', value: 'R$ 3.000,00 + troféu'},
    {iconClass: 'third', place: '3º lugar', value: 'R$ 2.000,00 + troféu'},
  ];
  rule: ButtonProps = {
    text: 'Confira o regulamento', type: 'primary', size: 'xl'
  };
  subscribe: ButtonProps = {
    text: 'Faça sua inscrição', type: 'primary', size: 'xl'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
