import { Component } from '@angular/core';
import { Post } from '../../Classes/postData';
import { FormsModule } from '@angular/forms';
import { PostAPIsService } from '../../services/post-apis.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
postObj: Post = new Post();

constructor(private postService:PostAPIsService,private http:HttpClient,private route:Router,private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe((res:any)=>{
    console.log(res);
    if(res.id){
     this.http.get("https://jsonplaceholder.typicode.com/posts/"+res.id).subscribe((res:any)=>{
       this.postObj = res;
       console.log(res);
        console.log(this.postObj );
     })
    }
  })
}

listData(){
  this.route.navigateByUrl('api');
}

savePostData(){
    this.postService.createPost(this.postObj).subscribe((res:any)=>{
       alert("Data Save success...!");
    })
  }
  reset() {
     this.postObj = new Post();
  }

   updateData() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res: any) => {
      alert("Updated");
    })
  }
}
