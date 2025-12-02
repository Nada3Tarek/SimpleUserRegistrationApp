import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserListComponent {
  @Input() users: any[] = [];

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
