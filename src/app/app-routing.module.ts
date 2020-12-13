import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {WelcomeComponent} from './welcome/welcome.component';

import {ListCommentsComponent} from './list-comments/list-comments.component';
import {ListStoryComponent} from './list-story/list-story.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/register', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/comments/:id', component: ListCommentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'home/storie/:id', component: ListStoryComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
