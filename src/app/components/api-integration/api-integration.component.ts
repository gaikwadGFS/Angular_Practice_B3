import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {

  // http =inject(HttpClient);

  postList: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
      this.postList = res;
      console.log(this.postList);
    })
  }

  deleteRecord(id: any) {
    const isDelete = confirm("Are you sure want to delete..");
    if (isDelete) {
      this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id).subscribe((res: any) => {
        alert("Deleted Suucessfully");
      })
    } else {
      alert("something error");
    }

  }
}
