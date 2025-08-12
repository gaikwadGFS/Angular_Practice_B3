import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj:any={
    userName:'',
    password:''
  }

  router = inject(Router)

  login(){
    if(this.userObj.userName == 'admin' && this.userObj.password == '1234'){
      alert("login successs");
      localStorage.setItem('loginUser',this.userObj.userName);
      this.router.navigateByUrl('student');
    }else{
      alert("Wrong credentails")
    }
  }
}
