import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  imports: [],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  @Input({transform: numberAttribute})
  id!:number;
}
