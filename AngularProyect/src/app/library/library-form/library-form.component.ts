import { Component, EventEmitter, Input, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { LibraryCreationDTO, LibraryDTO } from '../library';
import { MapCompComponent } from "../../shared/components/map-comp/map-comp.component";
import { Coordinates } from '../../shared/components/map-comp/Coordinates';

@Component({
  selector: 'app-library-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MapCompComponent],
  templateUrl: './library-form.component.html',
  styleUrl: './library-form.component.css'
})
export class LibraryFormComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, lengthC: this.model.lengthC})
    } 
  }

  @Input()
  model?: LibraryCreationDTO;

  @Output()
  postForm = new EventEmitter<LibraryCreationDTO>();

  initialCoordinates: Coordinates[] = [];

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name:['',{validators:[Validators.required]}],
    latitude: new FormControl<number | null>(null, [Validators.required]),
    lengthC: new FormControl<number | null>(null, [Validators.required])
  })

  getErrorFieldName(): string{
    let name = this.form.controls.name;

    if(name.hasError('required')){
      return "The name field is required";
    }
    return "";
  }

  selectedCoordinates(coordinate: Coordinates){
    this.form.patchValue(coordinate);
  }

  saveChanges(){
    if(!this.form.valid){
      return;
    }

    const library = this.form.value as LibraryCreationDTO;
    this.postForm.emit(library);
  }
}
