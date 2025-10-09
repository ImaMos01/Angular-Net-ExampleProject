import { Component, Input, numberAttribute } from '@angular/core';
import { BookDTO, BookCreationDTO} from '../books';
import { BookFormsComponent } from "../book-forms/book-forms.component";
import { MultipleSelectorDto } from '../../shared/components/multiple-selector/MultipleSelectorModel';
import { authorAutoCompleteDTO } from '../../author/author';

@Component({
  selector: 'app-book-edit',
  imports: [BookFormsComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  
  @Input({transform: numberAttribute})
  id!:number;

  selectedGenres: MultipleSelectorDto[] = [{key: 2, value: 'drama'}];

  unselectedGenres: MultipleSelectorDto[] = [
    {key: 1, value: 'sci'},
    {key: 3, value: 'action'}
  ];

  selectedLibrary: MultipleSelectorDto[] = [
    {key: 2, value: 'B'}
  ];

  unselectedLibrary: MultipleSelectorDto[] = [
    {key: 1, value: 'A'},
    {key: 3, value: 'C'}
  ];

  selectedAuthors: authorAutoCompleteDTO[] =[
    {id: 1, name: 'authorA', nickname: 'a', photo: ''}
  ];

  book: BookDTO = {
    id:1, title:'a', review: '', releaseDate: new Date('2018-07-25'), cover:''
  }
  saveChanges(books: BookCreationDTO){
  }
}
