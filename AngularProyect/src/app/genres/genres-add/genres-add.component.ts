import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres-add',
  imports: [MatButtonModule],
  templateUrl: './genres-add.component.html',
  styleUrl: './genres-add.component.css'
})
export class GenresAddComponent {
  router = inject(Router);

  saveChanges(){
    this.router.navigate(['/genres']);
  }
}
