import { Component, inject } from '@angular/core';
import { GenresService } from '../genres.service';
import { genreDTO } from '../genres';
import { EntityIndexComponent } from "../../shared/components/entity-index/entity-index.component";
import { RouterLink } from "@angular/router";
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';


@Component({
  selector: 'app-genres-index',
  imports: [EntityIndexComponent],
  templateUrl: './genres-index.component.html',
  styleUrl: './genres-index.component.css',
  providers: [
    {provide: SERVICE_CRUD_TOKEN, useClass: GenresService}
  ]
})
export class GenresIndexComponent {
  
}
