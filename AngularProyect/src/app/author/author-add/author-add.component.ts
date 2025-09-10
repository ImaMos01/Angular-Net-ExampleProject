import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from "@angular/material/button";
import { AuthorFormComponent } from "../author-form/author-form.component";
import { AuthorCreationDto } from '../author';

@Component({
  selector: 'app-author-add',
  imports: [RouterLink, MatIconModule, MatButton, AuthorFormComponent],
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent {
  saveChanges(author:AuthorCreationDto){
    console.log("")
  }
}
