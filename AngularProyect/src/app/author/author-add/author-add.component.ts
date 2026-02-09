import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthorFormComponent } from "../author-form/author-form.component";
import { AuthorCreationDto } from '../author';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';
import { ShowErrosComponent } from "../../shared/components/show-erros/show-erros.component";

@Component({
  selector: 'app-author-add',
  standalone: true,
  imports: [MatIconModule, AuthorFormComponent, ShowErrosComponent],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {

  authorsService = inject(AuthorService);
  router = inject(Router);
  errors: string[] = [];

  saveChanges(author:AuthorCreationDto){
    this.authorsService.create(author).subscribe({
      next: () => {
        this.router.navigate(['/authors'])
      },
      error: err => {
          const errors = errorExtract(err);
          this.errors = errors;
      }
    })
  }
}
