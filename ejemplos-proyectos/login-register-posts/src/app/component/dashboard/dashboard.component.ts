import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  posts: any[] = [];
  constructor(private postService: PostService, private localStorageService: LocalStorageService) {
    
  } 

  ngOnInit(): void {
    const userLogged = this.localStorageService.getItem('userLogged');
    this.postService.getPostsFromUser(userLogged?.id).subscribe((data: any) => {
      this.posts = data;
    });
  }

}
