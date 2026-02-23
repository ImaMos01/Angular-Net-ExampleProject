import { Component, inject, Input, numberAttribute } from '@angular/core';
import { AuthorCreationDto, AuthorDTO } from '../author';
import { AuthorFormComponent } from "../author-form/author-form.component";
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';
import { ShowErrosComponent } from "../../shared/components/show-erros/show-erros.component";
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';
import { EntityEditComponent } from "../../shared/components/entity-edit/entity-edit.component";

@Component({
  selector: 'app-author-edit',
  standalone: true,
  imports: [AuthorFormComponent, ShowErrosComponent, LoadingComponent, EntityEditComponent],
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.css',
  providers: [
      {provide: SERVICE_CRUD_TOKEN, useClass: AuthorService}
    ]
})
export class AuthorEditComponent {

  @Input({transform: numberAttribute})
  id!:number;
  
  authorsForm = AuthorFormComponent;

}
