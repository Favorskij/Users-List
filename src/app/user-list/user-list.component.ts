import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private service: UserService) { }

  ngOnInit(): void {

    this.users$ = this.service.getUsers();

  }

}
