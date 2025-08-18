import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../../Constants/cons';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

   validationMsg:any = Constant.VALIDATION_MSG;

  studentObj: any = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    isAcceptTerm: false
  }

  formValue: any;

  saveForm() {
    debugger;
    this.formValue = this.studentObj;

  }

  resetForm() {
   this.studentObj={
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    isAcceptTerm: false
  }
  }
}
