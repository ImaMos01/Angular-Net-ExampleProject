import { Component, Input, numberAttribute } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres-index',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './genres-index.component.html',
  styleUrl: './genres-index.component.css'
})
export class GenresIndexComponent {
  @Input({transform: numberAttribute})
  id!:number;
}
