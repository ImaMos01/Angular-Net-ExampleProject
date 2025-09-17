import { Component, Input, numberAttribute } from '@angular/core';
import { LibraryCreationDTO, LibraryDTO } from '../library';
import { LibraryFormComponent } from "../library-form/library-form.component";

@Component({
  selector: 'app-library-edit',
  imports: [LibraryFormComponent],
  templateUrl: './library-edit.component.html',
  styleUrl: './library-edit.component.css'
})
export class LibraryEditComponent {
  @Input({transform:numberAttribute})
  id!: number;

  library: LibraryDTO = {id: 1, name: 'norma'}

  saveChanges(library: LibraryCreationDTO){
    console.log(library);
  }
}
