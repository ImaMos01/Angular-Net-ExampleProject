import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthorCreationDto, AuthorDTO } from '../author';
import moment from 'moment';

@Component({
  selector: 'app-author-form',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule, MatDatepickerModule],
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
    birthDate: new FormControl<Date | null>(null)
  })

  saveChanges(){
    if(!this.form.valid){
      return;
    }
    const author = this.form.value as AuthorCreationDto;
    author.birthDate = moment(author.birthDate).toDate();
    this.postForm.emit(author);
  }
}
