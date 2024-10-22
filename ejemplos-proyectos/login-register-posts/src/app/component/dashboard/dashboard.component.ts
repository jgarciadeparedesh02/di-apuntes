import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  posts: any[] = [];
  constructor(private postService: PostService) {
    
  } 

  ngOnInit(): void {
    this.postService.getPostsFromUser(1).subscribe((data: any) => {
      this.posts = data;
    });
  }

}
