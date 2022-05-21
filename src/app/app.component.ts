import { Component} from '@angular/core';
import { User} from './models/userList.model';
import {  faSortDown, faSortUp, faTrash,faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faTrash = faTrash;
  

  isFrst: boolean = false;
  isLast: boolean = false;
  isAddress: boolean = false;
  isAge: boolean = false;

  usersList: User[] = [
    {
      lastName: 'Jhon',
      firstName: 'Doe',
      age: 12,
      address: "sar u zor"
    },
    {
      lastName: 'Davit',
      firstName: 'Smith',
      age: 7,
      address: "patval"
    },
    {
      lastName: 'Jasika',
      firstName: 'Simpson',
      age: 10,
      address: "verin taxer"
    },
    {
      lastName: 'Gustaf',
      firstName: 'Adam',
      age: 10,
      address: "verin taxer"
    }
  ]

  constructor(){}
   
  



  searchData(search: string) {

    setTimeout(() => {
      if (search.trim() && search) {
        this.usersList = this.usersList.filter((user: User) => {
          return user.firstName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            user.lastName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            user.address.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||
            +search == user.age
        })
      } else (
        this.usersList = [
          {
            lastName: 'Jhon',
            firstName: 'Doe',
            age: 12,
            address: "sar u zor"
          },
          {
            lastName: 'Davit',
            firstName: 'Smith',
            age: 7,
            address: "patval"
          },
          {
            lastName: 'Jasika',
            firstName: 'Simpson',
            age: 10,
            address: "verin taxer"
          },
          {
            lastName: 'Gustaf',
            firstName: 'Adam',
            age: 10,
            address: "verin taxer"
          }
        ]
      )
    }, 300);


  }

  delete(index:number){
    this.usersList.splice(index,1)
  }

  editUser(user:User){
    this.usersList.push(user);
  }
  
  // sortUserList(bool: boolean, key: userKeyType) {
  //   bool = !bool;

  //   console.log(key)
  //   if (key === 'firstName') {
  //     this.isFrst = !this.isFrst
  //   } else if (key === 'lastName') {
  //     this.isLast = !this.isLast
  //   }

  //   if (bool) {

  //     this.usersList.sort(function (a: User, b: User) {
  //       if (a[key] > b[key]) {


  //         return -1
  //       }
  //       if (a[key] < b[key]) {

  //         return 1
  //       }

  //       return 0;
  //     })
  //   }

  //   this.usersList.sort(function (a: User, b: User) {

  //     if (a[key] > b[key]) {

  //       return 1
  //     }

  //     if (a[key] < b[key]) {

  //       return -1
  //     }


  //     return 0
  //   })


  //   console.log(bool)
  //   return bool

  // }

  sortAge() {
    this.isAge = !this.isAge;
    this.usersList.sort(function (a: User, b: User) {
      if (a.age > b.age) {
        return 1
      }
      if (a.age < b.age) {
        return -1
      }
      return 0;
    })

    if (this.isAge) {
      this.usersList.sort(function (a: User, b: User) {
        if (a.age > b.age) {
          return -1
        }
        if (a.age < b.age) {
          return 1
        }
        return 0;
      })
    }

  }

  sortAddress() {
    this.isAddress = !this.isAddress;
    this.usersList.sort(function (a: User, b: User) {
      if (a.address > b.address) {
        return 1
      }
      if (a.address < b.address) {
        return -1
      }
      return 0;
    })

    if (this.isAddress) {
      this.usersList.sort(function (a: User, b: User) {
        if (a.address > b.address) {
          return -1
        }
        if (a.address < b.address) {
          return 1
        }
        return 0;
      })
    }

  }

  sortLastName() {
    this.isLast = !this.isLast;
    this.usersList.sort(function (a: User, b: User) {
      if (a.lastName > b.lastName) {
        return 1
      }
      if (a.lastName < b.lastName) {
        return -1
      }
      return 0;
    })
    if (this.isLast) {

      this.usersList.sort(function (a: User, b: User) {
        if (a.lastName > b.lastName) {
          return -1
        }
        if (a.lastName < b.lastName) {
          return 1
        }
        return 0;
      })
    }
  }


  sortFirstName() {
    this.isFrst = !this.isFrst;
    this.usersList.sort(function (a: User, b: User) {
      if (a.firstName > b.firstName) {
        return 1
      }
      if (a.firstName < b.firstName) {
        return -1
      }
      return 0;
    })

    if (this.isFrst) {
      this.usersList.sort(function (a: User, b: User) {
        if (a.firstName > b.firstName) {
          return -1
        }
        if (a.firstName < b.firstName) {
          return 1
        }
        return 0;
      })
    }
  }
}
