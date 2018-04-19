import { Injector, Pipe, PipeTransform } from '@angular/core';
import { memoize, bind, MemoizedFunction, isUndefined, keys } from 'lodash';
import { FibonacciPipe } from './fibonacci.pipe';

@Pipe({
  name: 'memoize'
})
export class MemoizePipe implements PipeTransform {

  private readonly PIPES: {[key: string]: Pipe} = {
    fibonacci: FibonacciPipe
  };
  private cache: Map<string, MemoizedFunction> = new Map();

  constructor(public injector: Injector) {
    keys(this.PIPES).forEach((key: string) => {
      this[key] = this.injector.get(this.PIPES[key]);
    });
  }

  public transform(value: string, token: string): string | number {
    const instance = this[token];
    if (isUndefined(this.cache.get(token))) {
      this.cache.set(token, memoize(
        bind(instance.transform, instance)
      ));
    }
    return this.cache.get(token)(value);
  }

}