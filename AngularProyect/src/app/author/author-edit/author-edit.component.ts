import { Component, Input, numberAttribute } from '@angular/core';
import { AuthorCreationDto, AuthorDTO } from '../author';
import { AuthorFormComponent } from "../author-form/author-form.component";

@Component({
  selector: 'app-author-edit',
  imports: [AuthorFormComponent],
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.css'
})
export class AuthorEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

  author: AuthorDTO = {id:0, name:"juan", birthDate: new Date(1999-10-25), photo: ''}

  saveChanges(author:AuthorCreationDto){
    console.log()
  }
}
