import { Component, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { authorAutoCompleteDTO, AuthorCreationDto } from '../author';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-author-autocomplete',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule],
  templateUrl: './author-autocomplete.component.html',
  styleUrl: './author-autocomplete.component.css'
})
export class AuthorAutocompleteComponent {
  control = new FormControl();

  authors: authorAutoCompleteDTO[] = [{
    id: 1, name: 'authorA', nickname: '', photo: ''
    },{
      id: 2, name: 'authorB', nickname: '', photo: ''
    }
  ]

  selectedAuthors: authorAutoCompleteDTO[] = [];
  
  showColumn = ['image','name','nickname','actions'];

  @ViewChild(MatTable) table!: MatTable<authorAutoCompleteDTO>;

  selectedAuthor(event:MatAutocompleteSelectedEvent){
    this.selectedAuthors.push(event.option.value);
    this.control.patchValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }
  }
  removeAuthor(author: authorAutoCompleteDTO){
    const index = this.selectedAuthors.findIndex((item: authorAutoCompleteDTO) => item.id === author.id);
    this.selectedAuthors.splice(index,1);
    this.table.renderRows();
  }
}
