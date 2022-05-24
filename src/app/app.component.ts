import { Component } from '@angular/core';
import { User, userKeyType } from './models/userList.model';
import { faSortDown, faSortUp, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faTrash = faTrash;

  sortName?: userKeyType;
  direction: "asc" | "desc" | "" = "";
  usersList: User[] = [
    {
      lastName: 'Jhon',
      firstName: 'Doe',
      age: 12,
      address: "sar u zor",
      id: 1,
    },
    {
      lastName: 'Davit',
      firstName: 'Smith',
      age: 7,
      address: "patval",
      id: 2,
    },
    {
      lastName: 'Jasika',
      firstName: 'Simpson',
      age: 10,
      address: "verin taxer",
      id: 3,
    },
    {
      lastName: 'Gustaf',
      firstName: 'Adam',
      age: 10,
      address: "verin taxer",
      id: 4,
    }
  ]
  users = [...this.usersList];
  constructor() { }





  searchData(search: string) {

    setTimeout(() => {
      if (search.trim() && search) {
        this.usersList = this.usersList.filter((user: User) => {
          return user.firstName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            user.lastName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            user.address.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            +search == user.age
        })
      } else {
        this.usersList = [...this.users];
      }
    }, 300);
  }

  delete(us: User) {
    this.usersList = this.usersList.filter((item: User) => {
      return us.id != item.id
    })
    this.users = [...this.usersList];
  }

  editUser(user: User) {
    this.usersList.push(user);
  }

  sortUserList(key: userKeyType) {
    this.sortName = key;

    if (this.direction === "") {
      this.direction = "asc"
    } else if (this.direction === "asc") {
      this.direction = "desc"
    } else if (this.direction === "desc") {
      this.direction = "";
    }
  

    if (this.direction === "") {
      this.usersList = [...this.users];
      return
    }


    this.usersList.sort((a: User, b: User) => {

      if (a[key] > b[key]) {
        if (this.direction === "desc") {
          return -1
        }
        return 1
      }

      if (a[key] < b[key]) {
        if (this.direction === "desc") {
          return 1
        }
        return -1

      }

      return 0
    })

  }

}
