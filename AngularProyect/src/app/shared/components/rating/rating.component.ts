import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input({required: true, transform: (value: number) =>Array(value).fill(0)})
  maxRating! : number[];

  @Input()
  selectedRating = 0;

  @Output()
  voted = new EventEmitter<number>();

  prevRating = 0;

  handleMouseEnter(index: number){
    this.selectedRating = index + 1;
  }
  handleMouseLeave(){
    if(this.prevRating !== 0){
      this.selectedRating = this.prevRating;
    } else {
      this.selectedRating = 0;
    }
  }
  handleMouseClick(index: number){
    this.selectedRating = index +1;
    this.prevRating = this.selectedRating;
    this.voted.emit(this.selectedRating);
  }
}
