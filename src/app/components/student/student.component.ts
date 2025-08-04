import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostAPIsService } from '../../services/post-apis.service';
import { AlertComponent } from '../../resusableComponents/alert/alert.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink,AlertComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  post:any[]=[];

  constructor(private postSrv:PostAPIsService){
  this.getAllData();
  }

  getAllData(){
    this.postSrv.getAll().subscribe((res:any)=>{
      this.post=res;
      console.log("In Student Page data" + JSON.stringify(this.post));
    })
  }
}
