import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [

  {path:'', children: [

      // Страница /users
      {path: 'users', component: UserListComponent},

      // Страница /user/1 детали пользователя
      {path: 'user/:id', component: UserDetailComponent},

    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
