import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDivVisible1:boolean=false;
  toggleDiv2:boolean= true;
  num1:string ="";
  num2:string ="";
  active:boolean = true;

  hideDiv1(){
    this.isDivVisible1 = false;
  }
  showDiv2(){
     this.isDivVisible1=true;
  }

  toggle(){
    this.toggleDiv2 = !this.toggleDiv2
    // if(this.toggleDiv2 == true ){
    //     this.toggleDiv2 = false;
    // }else{
    //   this.toggleDiv2=true;
    // }
  }
}
