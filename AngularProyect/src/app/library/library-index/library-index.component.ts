import { Component, Input, numberAttribute } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-library-index',
  imports: [MatIconModule, RouterLink, MatButton],
  templateUrl: './library-index.component.html',
  styleUrl: './library-index.component.css'
})
export class LibraryIndexComponent {
  @Input({transform: numberAttribute})
  id!:number;
}
