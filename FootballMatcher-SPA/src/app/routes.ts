import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { GameCreatorComponent } from './game-creator/game-creator.component';

export const appRoutes: Routes =  [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'games', component: GameListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'game', component: GameCreatorComponent},

        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}

];
