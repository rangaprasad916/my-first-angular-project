import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [SectionComponent]
})
export class MainComponent {

}
