import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-genres-edit',
  imports: [],
  templateUrl: './genres-edit.component.html',
  styleUrl: './genres-edit.component.css'
})
export class GenresEditComponent {
  @Input({transform:numberAttribute})
  id!:number;
}
