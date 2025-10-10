import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthorCreationDto, AuthorDTO } from '../author';
import moment from 'moment';
import { dateCantBeFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-author-form',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent  implements OnInit{
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  private formBuilder = inject(FormBuilder);
  @Input()
  model?: AuthorDTO;

  @Output()
  postForm = new EventEmitter<AuthorCreationDto>();

  form = this.formBuilder.group({
    name:['',{
      validators:[Validators.required]
    }],
    birthDate: new FormControl<Date | null>(null,{
      validators: [Validators.required, dateCantBeFuture()]
    }),
    photo: new FormControl<File | string | null>(null)
  })

  getErrorNameField(){
    let field = this.form.controls.name;

    if(field.hasError('required')){
      return 'The field name is required';
    }
    return "";
  }

  getErrorBirthDateField(){
    let field = this.form.controls.birthDate;

    if(field.hasError('required')){
      return 'The field name is required';
    }

    if(field.hasError('future')){
      return field.getError('future').message;
    }

    return "";
  }

  selectedFile(file:File){
    this.form.controls.photo.setValue(file);
  }

  saveChanges(){
    if(!this.form.valid){
      return;
    }
    const author = this.form.value as AuthorCreationDto;
    author.birthDate = moment(author.birthDate).toDate();
    
    if(typeof author.photo === "string"){
      author.photo = undefined;
    }

    this.postForm.emit(author);
  }
}
