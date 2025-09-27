import { Component } from '@angular/core';
import { BookCreationDTO } from '../books';
import { BookFormsComponent } from "../book-forms/book-forms.component";

@Component({
  selector: 'app-book-add',
  imports: [BookFormsComponent],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  saveChanges(books: BookCreationDTO){
  }
}
