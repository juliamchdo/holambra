import { Component, OnInit } from '@angular/core';
import { ScheduleItems } from 'src/app/types/shedule/schedule.types';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  scheduleItems: ScheduleItems[] = [
    {date: '19/4', text: 'Lançamento e palestra'},
    {date: 'De 19/4 a 19/5', text: 'Inscrições'},
    {date: '7/6', text: 'Pitch Day e seleção das propostas para a segunda etapa'},
    {date: '12/6', text: 'Divulgação das propostas selecionadas'},
    {date: 'A partir de 15/6', text: 'Mentorias e desenvolvimento das iniciativas'},
    {date: '28/6', text: 'Visita técnica'},
    {date: '30/8', text: 'Pitch Day final, divulgação do ranking e evento de premiação'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
