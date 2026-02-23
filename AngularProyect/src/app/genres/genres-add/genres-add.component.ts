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
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';
import { EntityCreateComponent } from "../../shared/components/entity-create/entity-create.component";

@Component({
  selector: 'app-genres-add',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenresFormsComponent, ShowErrosComponent, EntityCreateComponent],
  templateUrl: './genres-add.component.html',
  styleUrl: './genres-add.component.css',
  providers:[
    {provide: SERVICE_CRUD_TOKEN, useClass:GenresService}
  ]
})
export class GenresAddComponent {
  
  formGenres = GenresFormsComponent;

  
}
