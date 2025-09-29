import { Component } from '@angular/core';
import { BookCreationDTO } from '../books';
import { BookFormsComponent } from "../book-forms/book-forms.component";
import { MultipleSelectorDto } from '../../shared/components/multiple-selector/MultipleSelectorModel';

@Component({
  selector: 'app-book-add',
  imports: [BookFormsComponent],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  selectedGenres: MultipleSelectorDto[] = [];

  unselectedGenres: MultipleSelectorDto[] = [
    {key: 1, value: 'sci'},
    {key: 2, value: 'drama'},
    {key: 3, value: 'action'}
  ];


  saveChanges(books: BookCreationDTO){
  }
}
