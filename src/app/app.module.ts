import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { PipesModule } from 'pipes-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {authInterceptorProviders} from './helps/auth.interceptor';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterUserComponent } from './footer-user/footer-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventComponent } from './event/event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventCategoryPipe } from './list-event/event-category.pipe';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormAddEventComponent } from './form-add-event/form-add-event.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { CommentComponent } from './comment/comment.component';
import { FormAddCommentComponent } from './form-add-comment/form-add-comment.component';
import { ListStoryComponent } from './list-story/list-story.component';
import { StorieComponent } from './storie/storie.component';
import { DetailStorieComponent } from './detail-storie/detail-storie.component';
import { FormAddStoryComponent } from './form-add-story/form-add-story.component';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    WelcomeComponent,
    EventComponent,
    ListEventComponent,
    EventCategoryPipe,
    DetailEventComponent,
    FormAddEventComponent,
    ListCommentsComponent,
    CommentComponent,
    FormAddCommentComponent,
    ListStoryComponent,
    StorieComponent,
    DetailStorieComponent,
    FormAddStoryComponent,
  ],
  entryComponents: [DetailEventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
