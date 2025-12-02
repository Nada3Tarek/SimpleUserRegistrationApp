import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'User Registration App';

  users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }
}
