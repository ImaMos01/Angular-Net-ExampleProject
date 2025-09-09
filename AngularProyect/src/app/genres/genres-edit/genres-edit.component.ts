import { Component, Input, numberAttribute } from '@angular/core';
import { GenresFormsComponent } from "../genres-forms/genres-forms.component";
import { genresCreationDTO } from '../genres';

@Component({
  selector: 'app-genres-edit',
  imports: [GenresFormsComponent],
  templateUrl: './genres-edit.component.html',
  styleUrl: './genres-edit.component.css'
})
export class GenresEditComponent {
  @Input({transform:numberAttribute})
  id!:number;

genre = {id:1,name:"sci"}

  saveChanges(genre:genresCreationDTO){

  }
}
