import { Component, OnInit } from '@angular/core';
import { InputProps } from 'src/app/types/input/input.types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  inputProps: InputProps = {
    type: 'text', placeholder: 'placeholder'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
