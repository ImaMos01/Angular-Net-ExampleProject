import { Component, OnInit } from '@angular/core';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { RatingComponent } from "./shared/components/rating/rating.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ListBooksComponent, MenuComponent, RatingComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title ="angular books";
}
