import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../../resusableComponents/alert/alert.component';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {
   
  // var name ="abc";

  name :string = "Typescript";
  rollNo : number = 90;
  isActive :boolean = true;
  date :Date = new Date();
  city:string ;
  
   person:any ={
       pId:1,
       pName :"ABC",
       pCity:"Pune"
   }
   
   cityArray:any[]=["Pune" , "Mumbai","Solapur"];

   constructor(private route:Router){
    // this.city ="Mumbai"
    this.city ="Mumbai";
    // this.displayDate();
    this.callFunction();
    this.objectAccess();
    this.arrayAccess();

   }

   
   navigateToStudent(){
     this.route.navigateByUrl('student')
   }

   displayDate(){
     console.log("Display Function Working");
     console.log(this.date);
   }
   

   callFunction(){
    console.log("Call Function Executed...");
    this.displayDate();
   }

   objectAccess(){
    console.log("Person Name :" + this.person.pName);
   }

   arrayAccess(){
      console.log("The City names are :" + this.cityArray[0] + " , " + this.cityArray[1]);

      for (let index = 0; index < this.cityArray.length; index++) {
        const element = this.cityArray[index];
        console.log(element);
        
      }
   }
  

}
