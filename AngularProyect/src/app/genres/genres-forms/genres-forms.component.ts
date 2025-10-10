import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { upperFirstLetter } from '../../shared/functions/validations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { genreDTO, genresCreationDTO } from '../genres';

@Component({
  selector: 'app-genres-forms',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './genres-forms.component.html',
  styleUrl: './genres-forms.component.css'
})
export class GenresFormsComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  @Input()
  model?: genreDTO;

  @Output()
  postForm = new EventEmitter<genresCreationDTO>();

  private formBuilder = inject(FormBuilder);
    
    form = this.formBuilder.group({
      name: ['',{validators: [Validators.required,Validators.maxLength(50), upperFirstLetter()]}]
    })

    getErrorsNameField(): string {
      let name = this.form.controls.name;

      if(name.hasError('required')){
        return "the name field is required";
      } else if(name.hasError('required')){
        return "the name field must not have more than 50 characters";
      }else if(name.hasError('upperFirstLetter')){
        return name.getError('upperFirstLetter').getError;
      }
      return "";
    }
    saveChanges(){
      if(!this.form.valid){
        return;
      }

      const genre = this.form.value as genresCreationDTO;
      this.postForm.emit(genre);

    }
}
