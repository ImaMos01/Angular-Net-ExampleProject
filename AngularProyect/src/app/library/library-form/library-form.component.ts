import { Component, EventEmitter, Input, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { LibraryCreationDTO, LibraryDTO } from '../library';

@Component({
  selector: 'app-library-form',
  imports: [MatFormFieldModule, ReactiveFormsModule,MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './library-form.component.html',
  styleUrl: './library-form.component.css'
})
export class LibraryFormComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    } 
  }

  @Input()
  model?: LibraryCreationDTO;

  @Output()
  postForm = new EventEmitter<LibraryCreationDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name:['',{validators:[Validators.required]}]
  })

  getErrorFieldName(): string{
    let name = this.form.controls.name;

    if(name.hasError('required')){
      return "The name field is required";
    }
    return "";
  }

  saveChanges(){
    if(!this.form.valid){
      return;
    }

    const library = this.form.value as LibraryCreationDTO;
    this.postForm.emit(library);
  }
}
