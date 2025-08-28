import { UpperCasePipe,CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { ɵEmptyOutletComponent } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-books',
  imports: [UpperCasePipe, CurrencyPipe, NgOptimizedImage, GenericListComponent, MatButtonModule, MatIconModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent {
  little = "Angular-Books";

  @Input({required:true}) //añade parametros a los componentes
  books!: any[];

  addBooks(){
    this.books.push({
      name:"yummy",
      price:90.8,
    })
  }

  removeBook(book:any){
    const index = this.books.findIndex((currentBook:any)=>currentBook.name === book.name);
    this.books.splice(index,1);
  }
}