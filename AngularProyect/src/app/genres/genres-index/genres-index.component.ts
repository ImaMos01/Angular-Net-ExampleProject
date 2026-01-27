import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-genres-index',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './genres-index.component.html',
  styleUrl: './genres-index.component.css'
})
export class GenresIndexComponent {
  genresService = inject(GenresService)

  constructor(){
    this.genresService.getAll().subscribe(genres =>{
      console.log(genres);
    });
  }
}
