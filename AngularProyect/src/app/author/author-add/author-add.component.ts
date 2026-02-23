import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthorFormComponent } from "../author-form/author-form.component";
import { AuthorCreationDto } from '../author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';
import { ShowErrosComponent } from "../../shared/components/show-erros/show-erros.component";
import { SERVICE_CRUD_TOKEN } from '../../shared/supplier/supplier';
import { EntityCreateComponent } from "../../shared/components/entity-create/entity-create.component";

@Component({
  selector: 'app-author-add',
  standalone: true,
  imports: [MatIconModule, AuthorFormComponent, ShowErrosComponent, EntityCreateComponent],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css',
  providers: [
    {provide: SERVICE_CRUD_TOKEN, useClass: AuthorService}
  ]
})
export class AuthorAddComponent {

  formAuthors = AuthorFormComponent;
}
