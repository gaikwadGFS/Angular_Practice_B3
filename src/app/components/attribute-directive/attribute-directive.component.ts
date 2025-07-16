import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  classNameDiv1:string='';
  classNameDiv2:string='';
  classNameDiv3:string='';
  isActive:boolean=true;
  isCircle:boolean=true;
  addSucess(){
     this.classNameDiv1='bg-success';
  }

  addGreen(){
    this.classNameDiv3 ='bg-success'
  }

  addSecondary(){
    this.classNameDiv3='bg-secondary'
  }
  addInfo(){
 this.classNameDiv3='bg-info'
  }
  addDanger(){
 this.classNameDiv3='bg-danger'
  }
  addPrimary(){
 this.classNameDiv3='bg-primary'
  }
  addWarning(){
 this.classNameDiv3='bg-warning'
  }

  removeSuccess(){
    this.classNameDiv1='';
  }
  square(){
   this.isCircle=false;
  }

  circle(){
    this.isCircle=true;
  }
}
