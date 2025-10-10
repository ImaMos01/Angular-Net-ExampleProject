import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { upperFirstLetter } from '../../shared/functions/validations';
import { GenresFormsComponent } from "../genres-forms/genres-forms.component";
import { genresCreationDTO } from '../genres';

@Component({
  selector: 'app-genres-add',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenresFormsComponent],
  templateUrl: './genres-add.component.html',
  styleUrl: './genres-add.component.css'
})
export class GenresAddComponent {
  
  private router = inject(Router);
  

  saveChanges(genre:genresCreationDTO){
    this.router.navigate(['/genres']);
  }
}
