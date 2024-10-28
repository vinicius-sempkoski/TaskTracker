import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectUser(){
    this.select.emit(this.user.id);
  }
}
