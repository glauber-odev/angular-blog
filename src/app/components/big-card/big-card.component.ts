import { Component } from '@angular/core';
import { MenuTitleComponent } from "../menu-title/menu-title.component";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [MenuTitleComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

}
