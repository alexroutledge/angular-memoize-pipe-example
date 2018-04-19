import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FibonacciPipe } from './fibonacci.pipe';
import { MemoizePipe } from './memoize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FibonacciPipe,
    MemoizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FibonacciPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
