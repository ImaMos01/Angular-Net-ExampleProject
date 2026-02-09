import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenresFormsComponent } from "../genres-forms/genres-forms.component";
import { genreDTO, genresCreationDTO } from '../genres';
import { GenresService } from '../genres.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { ShowErrosComponent } from '../../shared/components/show-erros/show-erros.component';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';

@Component({
  selector: 'app-genres-edit',
  imports: [GenresFormsComponent, LoadingComponent, ShowErrosComponent],
  templateUrl: './genres-edit.component.html',
  styleUrl: './genres-edit.component.css'
})
export class GenresEditComponent implements OnInit{

  ngOnInit(): void {
    this.genresService.getById(this.id).subscribe(genre => {
      this.genre = genre;
    })
  }

  @Input({transform:numberAttribute})
  id!:number;

  genre?:genreDTO;
  genresService = inject(GenresService);
  errors: string[] = [];
  router = inject(Router);

  saveChanges(genre:genresCreationDTO){
    this.genresService.update(this.id,genre).subscribe({
      next:() => {
        this.router.navigate(['/genre']);
      },
      error: err => {
        const errors = errorExtract(err);
        this.errors = errors;
      }
    });
  }
}
