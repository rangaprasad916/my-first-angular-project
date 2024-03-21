import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent]
})
export class AppComponent {
  title = 'angnew';
 // isactive:boolean=false;

  //applyC1:boolean=true;
  counter:number = 0;
  increment(){
    this.counter +=1
  }
  decrement(){
    this.counter -=1;
  }
  


   

}
