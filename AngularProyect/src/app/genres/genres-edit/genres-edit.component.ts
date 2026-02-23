import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenresFormsComponent } from "../genres-forms/genres-forms.component";
import { genreDTO, genresCreationDTO } from '../genres';
import { GenresService } from '../genres.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { ShowErrosComponent } from '../../shared/components/show-erros/show-erros.component';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';
import { EntityEditComponent } from "../../shared/components/entity-edit/entity-edit.component";

@Component({
  selector: 'app-genres-edit',
  standalone: true,
  imports: [GenresFormsComponent, LoadingComponent, ShowErrosComponent, EntityEditComponent],
  templateUrl: './genres-edit.component.html',
  styleUrl: './genres-edit.component.css',
  providers: [
    {provide: SERVICE_CRUD_TOKEN, useClass: GenresService}
  ]
})
export class GenresEditComponent{

  @Input({transform:numberAttribute})
  id!:number;

  formGenre = GenresFormsComponent;
  
}
