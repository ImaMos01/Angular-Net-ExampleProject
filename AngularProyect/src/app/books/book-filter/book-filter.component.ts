import { Component,inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListBooksComponent } from "../list-books/list-books.component";
import { filterBook } from './filterBook';

@Component({
  selector: 'app-book-filter',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListBooksComponent],
  templateUrl: './book-filter.component.html',
  styleUrl: './book-filter.component.css'
})
export class BookFilterComponent implements OnInit{
  ngOnInit(): void {
    //filter the books int the input
    this.form.valueChanges.subscribe(values =>{
      this.books = this.booksOriginal;
      this.searchBooks(values as filterBook)
    });
  }

  searchBooks(values: filterBook){
    if(values.title){
      this.books = this.books.filter(book => book.title.indexOf(values.title) !== -1);
    }
    if(values.genreId !== 0){
      this.books = this.books.filter(book => book.genre.indexOf(values.genreId) !== -1);
    }
    if(values.nextPublication){
      this.books = this.books.filter(book => book.nextPublication);
    }
    if(values.onLibrary){
      this.books = this.books.filter(book => book.onLibrary);
    }
  }

  cleanFilter(){
    this.form.patchValue({title:'', genreId: 0, nextPublication: false, onLibrary: false});
  }
 private formBuilder = inject(FormBuilder);

 form = this.formBuilder.group({
  title: '',
  genreId: 0,
  nextPublication: false,
  onLibrary: false
 })
 genres = [
  {id: 1, name: "Drama"},
  {id: 2, name: "Action"},
  {id: 3, name: "Comedy"},
 ]

 booksOriginal = [{
    title:"sas",
    price: 20.5,
    bookImage: "https://static.wikia.nocookie.net/yugioh/images/f/f8/Purrely-AMDE-EN-UR-1E.png/revision/latest?cb=20230129215001",
    genre: [1,2],
    onLibrary:true,
    nextPublication: false
  },{
    title:"yummy",
    price: 20.5,
    booksImage: "https://static.wikia.nocookie.net/yugiohenespanol/images/9/90/Cupsy%E2%98%86yummy.jpg/revision/latest?cb=20250727094636&path-prefix=es",
    genre: [3],
    onLibrary:false,
    nextPublication: true
  },{
    title:"sus",
    price: 10.5,
    bookImage: "https://static.wikia.nocookie.net/yugioh/images/f/f8/Purrely-AMDE-EN-UR-1E.png/revision/latest?cb=20230129215001",
    genre: [1,2,3],
    onLibrary:true,
    nextPublication: false
  }]

  books = this.booksOriginal;
}
