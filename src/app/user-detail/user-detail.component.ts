import { Component, OnInit } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {User} from "../model/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  user$!: Observable<User>;

  constructor(private route: ActivatedRoute, private router: Router, private service: UserService ) {}


  ngOnInit() {

    this.user$ = this.route.paramMap.pipe(

      switchMap((params: ParamMap) =>

        this.service.getUser(params.get('id')!))

    );

  }

  gotoHeroes(user: User) {
    const userId = user ? user.id : null;

    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // Передайте идентификатор user, если он доступен, чтобы компонент user-detail мог выбрать этого пользователя.
    // Включите нежелательное свойство 'foo' для развлечения.

    this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
  }

}
