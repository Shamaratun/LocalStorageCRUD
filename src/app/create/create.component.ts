import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  
   styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  u: User=new User('', 0, '','');
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
 onSubmit(){
   let users = JSON.parse(localStorage.getItem('users')||'[]');
   users.push(this.u);
   localStorage.setItem('users',JSON.stringify('users'));
   this.u = new User ('', 0, '','');
   alert('user added successfully')
 }
  

//   constructor(){}
//     ngOnInit():void{
// console.log('CreateComponent');
// console.error('CreateComponent');

// localStorage.setItem('name','john');
// localStorage.setItem('age','25');
// localStorage.setItem('phone','12345');
// localStorage.setItem('address','main street');
//     }
  }

