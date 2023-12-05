import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GameComponent, CommentsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Sergio'
  isLoggedIn = false;
  favGame = '';
  getFavorite(gameName : string){
    this.favGame = gameName;
  }
  greet(){
    alert('¡¡¡HOLAA!!!')
  }
}
