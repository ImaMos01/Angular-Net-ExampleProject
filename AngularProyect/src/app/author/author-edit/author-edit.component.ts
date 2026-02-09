import { Component, inject, Input, numberAttribute } from '@angular/core';
import { AuthorCreationDto, AuthorDTO } from '../author';
import { AuthorFormComponent } from "../author-form/author-form.component";
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { errorExtract } from '../../shared/functions/errorExtract';
import { ShowErrosComponent } from "../../shared/components/show-erros/show-erros.component";
import { LoadingComponent } from "../../shared/components/loading/loading.component";

@Component({
  selector: 'app-author-edit',
  standalone: true,
  imports: [AuthorFormComponent, ShowErrosComponent, LoadingComponent],
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.css'
})
export class AuthorEditComponent {
  ngOnInit(): void{
    this.authorsService.getById(this.id).subscribe(author =>{
      this.author = author;
    })
  }

  @Input({transform: numberAttribute})
  id!:number;
  author?:AuthorDTO; 
  authorsService = inject(AuthorService);
  router = inject(Router);
  errors: string[] = []

  saveChanges(author:AuthorCreationDto){
    this.authorsService.update(this.id,author).subscribe({
      next:() => {
        this.router.navigate(['/authors']);
      },
      error: err =>{
        const errors = errorExtract(err);
        this.errors = errors;
      }
    })
  }
}
