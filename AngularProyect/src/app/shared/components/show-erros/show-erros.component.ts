import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-show-erros',
  imports: [],
  templateUrl: './show-erros.component.html',
  styleUrl: './show-erros.component.css'
})
export class ShowErrosComponent {
  @Input({required:true})
  errors!:string[];
}
