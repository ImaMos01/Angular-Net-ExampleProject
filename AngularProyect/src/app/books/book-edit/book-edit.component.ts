import { Component, Input, numberAttribute } from '@angular/core';
import { BookDTO, BookCreationDTO} from '../books';
import { BookFormsComponent } from "../book-forms/book-forms.component";

@Component({
  selector: 'app-book-edit',
  imports: [BookFormsComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

  book: BookDTO = {
    id:1, title:'a', review: '', releaseDate: new Date('2018-07-25'), cover:''
  }
  saveChanges(books: BookCreationDTO){
  }
}
