import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   
  languageName:string ="Angular";
  name:string="Ram";

  inputText:string= "checkbox";

  courseName:string = "Javascript";

  imgUrl:string ="https://tse2.mm.bing.net/th/id/OIP.Cqt6j3TVGiYzPIwcrii1_gHaDt?pid=Api&P=0&h=180"

  empName:string =""

  imgMessage:string="Iamge not Found"

  greet(){
    alert("Welcome to Angular session");
  }

  spanMsg(){
    alert("Span Click Works...!");
  }

  
}
