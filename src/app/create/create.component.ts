import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',

  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  u: User = new User('', 0, '', '');
  isUpdate = false;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['users']) {
      this.u = nav.extras.state['users'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    console.log('CreateComponent');
    console.error('CreateComponent');
    localStorage.setItem('name', 'john');
    localStorage.setItem('age', '25');
    localStorage.setItem('phone', '12345');
    localStorage.setItem('address', 'main street');
  }

  onSubmit() {
    let users: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    if (this.isUpdate) {
      users = users.map((user) => (user.phone == this.u.phone ? this.u : user));
    } else {
      users.push(this.u);
    }
      localStorage.setItem('user', JSON.stringify(users));
      this.u = new User('', 0, '', '');
      //  alert('user added successfully')
      this.router.navigate(['/list']);
    }
  }

