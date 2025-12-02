import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserListComponent {
  @Input() users: any[] = [];

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  isWeakPassword(pwd: string): boolean {
    return pwd.length < 5;
  }
}
