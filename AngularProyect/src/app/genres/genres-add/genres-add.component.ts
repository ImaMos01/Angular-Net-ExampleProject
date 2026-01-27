import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { upperFirstLetter } from '../../shared/functions/validations';
import { GenresFormsComponent } from "../genres-forms/genres-forms.component";
import { genresCreationDTO } from '../genres';
import { GenresService } from '../genres.service';
import { errorExtract } from '../../shared/functions/errorExtract';
import { ShowErrosComponent } from "../../shared/components/show-erros/show-erros.component";

@Component({
  selector: 'app-genres-add',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenresFormsComponent, ShowErrosComponent],
  templateUrl: './genres-add.component.html',
  styleUrl: './genres-add.component.css'
})
export class GenresAddComponent {
  
  private router = inject(Router);
  private genresService = inject(GenresService);
  errors: string[] = [];

  saveChanges(genre:genresCreationDTO){
    this.genresService.create(genre).subscribe({
      next: () => {
        this.router.navigate(['/genres']);
      },
      error: err => {
        const errors = errorExtract(err);
        this.errors = errors;
      }
    });
  }
}
