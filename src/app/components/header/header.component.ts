import { Component, OnInit } from '@angular/core';
import { NavItems } from 'src/app/types/header/header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: NavItems[] = [
    {title: 'Inscreva-se', goTo: 'subscribe'},
    {title: 'Desafios', goTo: 'challenges'},
    {title: 'Cronograma', goTo: 'schedule'},
    {title: 'Premiação', goTo: 'award'},
    {title: 'Regulamento', goTo: 'rules'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
