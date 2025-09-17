import { Component } from '@angular/core';
import { LibraryCreationDTO } from '../library';
import { LibraryFormComponent } from "../library-form/library-form.component";

@Component({
  selector: 'app-library-add',
  imports: [LibraryFormComponent],
  templateUrl: './library-add.component.html',
  styleUrl: './library-add.component.css'
})
export class LibraryAddComponent {

  saveChanges(library:LibraryCreationDTO){
    console.log(library);
  }
}
