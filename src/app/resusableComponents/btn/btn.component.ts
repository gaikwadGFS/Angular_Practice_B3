import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {

  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    debugger;
     this.onBtnClick.emit("Hi From Child");
  }
}
