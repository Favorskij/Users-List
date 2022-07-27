import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {User} from "./model/user";
import {USERS} from "./db/db-entity";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUsers(): Observable<User[]> {
    // send the message _after_ fetching the heroes
    // отправить сообщение _после_ получения heroes
    return of(USERS);
  }

  getUser(id: number | string) {
    return this.getUsers().pipe(
      // (+) before `id` turns the string into a number
      // до того, как `id` превратит строку в число
      map((users: User[]) => users.find(user => user.id === +id)!)
    );
  }


}
