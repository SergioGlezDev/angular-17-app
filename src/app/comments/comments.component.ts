import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <h3> Comment Section</h3>
  <img src="https://i.ytimg.com/vi/g4dY7IddD9c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-FtRf9CLvoQL1S2MCE_nzmLHRYg" alt="photo">
  <p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, eaque quo nostrum aut hic temporibus tenetur! Placeat, aliquam facilis. Libero veritatis saepe distinctio minus repellat illo rerum asperiores omnis maxime.
</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
