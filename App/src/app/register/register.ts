import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {
  username = '';
  password = '';

  usernameExists = false;
  usernameEmpty = false;
  passwordEmpty = false;
  @Input() users: any[] = [];

  @Output() userAdded = new EventEmitter<any>();

  onSubmit() {
    this.usernameExists = false;
    this.usernameEmpty = false;
    this.passwordEmpty = false;

    const trimmedUsername = this.username.trim();
    const trimmedPassword = this.password.trim();
    if (!trimmedUsername) {
      this.usernameEmpty = true;
    }

    if (!trimmedPassword) {
      this.passwordEmpty = true;
    }

    if (!trimmedUsername || !trimmedPassword) {
      return;
    }

    if (
      this.users.some(
        (u) => u.username.toLowerCase() === trimmedUsername.toLowerCase()
      )
    ) {
      this.usernameExists = true;
      return;
    }

    const newUser = {
      username: trimmedUsername,
      password: trimmedPassword,
    };

    this.userAdded.emit(newUser);

    this.username = '';
    this.password = '';
  }
}
