import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  //applyC1:boolean=true;
  counter:number = 0;
  increment(){
    this.counter +=1
  }
  decrement(){
    this.counter -=1;
  }
  
}
