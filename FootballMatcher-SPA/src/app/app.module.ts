import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GameListComponent } from './game-list/game-list.component';
import { MessagesComponent } from './messages/messages.component';

import { ErrorInterceptorProvider } from '../app/services/error.interceptor';
import { AuthService } from '../app/services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { appRoutes } from './routes';

import { AuthGuard } from './guards/auth.guard';
import { GameService } from './services/game.service';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { GamesCreatedComponent } from './games-created/games-created.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      GameListComponent,
      MessagesComponent,
      GameCreatorComponent,
      GamesCreatedComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      GameService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
