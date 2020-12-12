import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
