import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { NaPipe } from '../../Pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, JsonPipe,CommonModule,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name: string = 'PIPE';
  welcomeMsg: string = "hello , erveryone";

  currentDate: Date = new Date();

  a: number = 0.259;
  b: number = 1.3495;

  studentObj: any[] = [
    {
      id: 101,
      name: "ABC",
      city: "Pune"
    },
     {
      id: 101,
      name: "xyz",
      city: ""
    },
     {
      id: 101,
      name: "mno",
      city: "Pune"
    },
     {
      id: 101,
      name: "",
      city: "Pune"
    }
  ]


}