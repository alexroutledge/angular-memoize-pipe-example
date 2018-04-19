import { MemoizePipe } from './memoize.pipe';
import { Injector } from '@angular/core';

describe ('MemoizePipe', () => {

  const injector = {
    get: (_) => {
      return {
        transform: () => undefined
      };
    }
  };

  it ('should call the pipe if the method does not exist in the cache', () => {
    const pipe = new MemoizePipe(injector as Injector);
    const spy = spyOn(pipe['fibonacci'], 'transform');
    pipe.transform('123', 'fibonacci');
    expect(spy).toHaveBeenCalled();
  });

  it ( 'should not call the pipe if the method exists in the cache', () => {
    const pipe = new MemoizePipe(injector as Injector);
    pipe.transform('123', 'fibonacci');
    const spy = spyOn(pipe['fibonacci'], 'transform');
    pipe.transform('123', 'fibonacci');
    expect(spy).not.toHaveBeenCalled();
  });

});