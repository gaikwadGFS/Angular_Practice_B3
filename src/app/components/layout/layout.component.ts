import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUser:any;

  constructor(){
   const loginDetails= localStorage.getItem('loginUser');
   if(loginDetails != null){
     this.loggedUser =loginDetails;
   }
  }

  router=inject(Router)

  logOff(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
