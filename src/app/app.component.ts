import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadioComponent } from "./radio/radio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RadioComponent]
})
export class AppComponent {
  title = 'radio-streaming';
}
