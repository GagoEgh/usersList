import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/userList.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  faUserEdit = faUserEdit;

  userForm!: FormGroup;
  @Output() addUser: EventEmitter<User> = new EventEmitter()
  constructor(private fb: FormBuilder) {
    this.formInit()
  }


  formInit() {
    this.userForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  createUser() {
    if (this.userForm.valid) {
      const user: User = {
        firstName: this.userForm.get('firstName')?.value,
        lastName: this.userForm.get('lastName')?.value,
        age: +this.userForm.get('age')?.value,
        address: this.userForm.get('address')?.value
      }
      this.addUser.emit(user);
      this.userForm.reset();
    }
  }
}
