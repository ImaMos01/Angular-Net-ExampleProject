import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-author-add',
  imports: [RouterLink, MatIconModule, MatButton],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {

}
