import { Component, Input,numberAttribute } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author-index',
  imports: [MatIconModule, RouterLink, MatButton],
  templateUrl: './author-index.component.html',
  styleUrl: './author-index.component.css'
})
export class AuthorIndexComponent {
  @Input({transform: numberAttribute})
    id!:number;
}
