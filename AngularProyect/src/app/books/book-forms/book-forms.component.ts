import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { BookDTO, BookCreationDTO } from '../books';
import moment from 'moment';
import { MultipleSelectorDto } from '../../shared/components/multiple-selector/MultipleSelectorModel';
import { MultipleSelectorComponent } from "../../shared/components/multiple-selector/multiple-selector.component";
import { AuthorAutocompleteComponent } from "../../author/author-autocomplete/author-autocomplete.component";
import { authorAutoCompleteDTO } from '../../author/author';

@Component({
  selector: 'app-book-forms',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, MultipleSelectorComponent, AuthorAutocompleteComponent],
  templateUrl: './book-forms.component.html',
  styleUrl: './book-forms.component.css'
})
export class BookFormsComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelBook !== undefined){
      this.form.patchValue(this.modelBook);
    }
  }

  @Input({required:true})
  unselectedGenres!: MultipleSelectorDto[];
  
  @Input({required:true})
  selectedGenres!: MultipleSelectorDto[];

  @Input({required:true})
  unselectedLibrary!: MultipleSelectorDto[];
  
  @Input({required:true})
  selectedLibrary!: MultipleSelectorDto[];

  @Input()
  modelBook?: BookDTO;

  @Input()
  selectedAuthors!: authorAutoCompleteDTO[];
  
  @Output()
  postForm = new EventEmitter<BookCreationDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['',{validators: [Validators.required]}],
    releaseDate: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    review: '',
    cover: new FormControl<File | string | null>(null)
  });

  fileSelected(file:File){
    this.form.controls.cover.setValue(file);
  }

  saveChanges(){
    if(!this.form.valid){
      return;
    }
    const book = this.form.value as BookCreationDTO;

    book.releaseDate = moment(book.releaseDate).toDate();

    book.genresId = this.selectedGenres.map(val => val.key);
    book.libraryId = this.selectedLibrary.map(val => val.key);

    book.authors = this.selectedAuthors;

    this.postForm.emit(book);
  }

  getErrorTitleField(): string {
    let field = this.form.controls.title;

    if(field.hasError('required')){
      return 'The field title is required';
    }

    return '';
  }

  getErrorReleaseDateField(): string {
    let field = this.form.controls.releaseDate;

    if(field.hasError('required')){
      return 'The field date is required';
    }
    
    return '';
  }
}
