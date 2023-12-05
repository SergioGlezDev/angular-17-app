import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
    <h3> Juegos favoritos de {{username}}</h3>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)"> juego: {{ game.name }} genero : {{game.genre}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GameComponent {
  @Input() username = ''; // * Father to son communication
  @Output() addFavoriteEvent = new EventEmitter<string>(); // * Son to father communication
  fav(gameName : string){
    // alert(`A ${this.username} le gusta jugar a ${gameName}`)
    this.addFavoriteEvent.emit(gameName);
  }
  games =[
    {
      id: 1,
      name: 'Uncharted',
      genre: ['Aventura', 'Accion', 'Puzzles']
    },
    {
      id: 2,
      name: 'Zelda Breath of the Wild',
      genre: ['Aventura', 'Accion', 'Mundo abierto']
    },
    {
      id: 3,
      name: 'Resident Evil 4 Remake',
      genre: ['Tercera persona', 'Accion', 'Terror', 'Supervivencia']
    }
  ]
}
