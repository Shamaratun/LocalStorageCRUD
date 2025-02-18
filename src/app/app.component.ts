import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CreateComponent } from './create/create.component';
// import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LocalStorageRUD';

}

export class User {
  name: string;
  age: number;
  phone: string;
  address: string;

  constructor(name: string, age: number, phone: string, address: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
