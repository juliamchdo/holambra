import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent implements OnInit {

  constructor() { }

  scrollUp(){
    const section = document.querySelector("#header");
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit(): void {
  }

}
