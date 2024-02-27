import { Component, Input, OnInit } from '@angular/core';
import { ButtonProps } from 'src/app/types/button/button.types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonProps: ButtonProps = {
    text: 'Text',
    type: 'primary'
  };

  constructor() { }

  ngOnInit(): void {
    console.log('props', this.buttonProps)
  }

}
