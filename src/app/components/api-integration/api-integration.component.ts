import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostAPIsService } from '../../services/post-apis.service';
import { BtnComponent } from '../../resusableComponents/btn/btn.component';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [CommonModule, FormsModule,BtnComponent],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {

  // http =inject(HttpClient);

  postList: any[] = [];
  postObj: any = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  }

  constructor(private http: HttpClient, private postService: PostAPIsService) {
    this.getAllDetails();
  }

  // getAllDetails() {
  //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
  //     this.postList = res;
  //     console.log(this.postList);
  //   })
  // }

  getAllDetails() {
    this.postService.getAll().subscribe((res: any) => {
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

  // savePostData() {
  //   this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res: any) => {
  //     alert("Data Save success...!");
  //   })
  // }

  savePostData(){
    this.postService.createPost(this.postObj).subscribe((res:any)=>{
       alert("Data Save success...!");
    })
  }
  reset() {
    this.postObj = {
      userId: 0,
      id: 0,
      title: "",
      body: ""
    }
  }

  editData(list: any) {
    this.postObj = list;
    console.log(list);
  }

  updateData() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res: any) => {
      alert("Updated");
    })
  }
}
