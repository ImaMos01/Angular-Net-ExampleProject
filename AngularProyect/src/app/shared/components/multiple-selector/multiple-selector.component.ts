import { Component, Input } from '@angular/core';
import { MultipleSelectorDto } from './MultipleSelectorModel';

@Component({
  selector: 'app-multiple-selector',
  imports: [],
  templateUrl: './multiple-selector.component.html',
  styleUrl: './multiple-selector.component.css'
})

export class MultipleSelectorComponent {

  @Input({required: true})
  SelectedItems!: MultipleSelectorDto[];

  @Input({required:true})
  NotSelectedItems!: MultipleSelectorDto[];

  selectOption(element: MultipleSelectorDto, index: number){
    this.SelectedItems.push(element);
    this.NotSelectedItems.splice(index, 1);
  }

  unselectOption(element: MultipleSelectorDto, index: number){
    this.NotSelectedItems.push(element);
    this.SelectedItems.splice(index, 1);
  }

  selectAll(){
    this.SelectedItems.push(...this.NotSelectedItems);
    this.NotSelectedItems.length = 0;
  }

  unselectAll(){
    this.NotSelectedItems.push(...this.SelectedItems);
    this.SelectedItems.length = 0;
  }
}
