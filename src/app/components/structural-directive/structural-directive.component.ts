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
  city:any[] = ['Pune','Mumbai','Thane','Solapur'];
  rollNo:any[]=[11, 12,13,14,15,16,17,18,19,20];

  studentDetails:any[]=[
    {
      name:'Yash',
      age:20,
      city:'Pune',
      isActive:true
    },
     {
      name:'Shubham',
      age:25,
      city:'Mumbai',
      isActive:false
    },
     {
      name:'Ram',
      age:30,
      city:'Thane',
      isActive:true
    },
     {
      name:'Shyam',
      age: 15,
      city:'Solpaur',
      isActive:false
    },
     {
      name:'Shreya',
      age:21,
      city:'Pandharpur',
      isActive:true
    },
  ]

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
