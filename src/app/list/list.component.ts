import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  Meme: User[] = [];
  constructor(private router: Router) {}
  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user') || '[]');
    this.Meme = user;
  }
  editUser(users: User) {
    this.router.navigate(['/create'], { state: { users } });
  }

  deleteUser(users: User) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.Meme = this.Meme.filter((user) => user !== users);
      localStorage.setItem('user', JSON.stringify(this.Meme));
      alert('user deleted successfully');
    }
  }
}
