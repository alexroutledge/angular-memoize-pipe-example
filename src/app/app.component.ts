import { Component, Pipe } from '@angular/core';
import { FibonacciPipe } from './fibonacci.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pipe: Pipe = FibonacciPipe;
  title = 'app';
}
