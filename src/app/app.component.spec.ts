import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FibonacciPipe } from './fibonacci.pipe';
import { MemoizePipe } from './memoize.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FibonacciPipe,
        MemoizePipe
      ],
      providers: [
        FibonacciPipe
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
