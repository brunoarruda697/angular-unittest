import { fakeAsync, flushMicrotasks, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

describe('AsynExamples', () => {

  it('async with promise + setTimeout', fakeAsync(() => {
    let counter = 0;

    Promise.resolve().then(() => {
      counter += 10;

      setTimeout(() => {
        counter += 1;
      }, 1000);
    });

    expect(counter).toBe(0);

    flushMicrotasks();

    expect(counter).toBe(10);

    tick(1000);

    expect(counter).toBe(11);
  }));

  it('async with observable', fakeAsync(() => {
    let test = false;
    console.log('Creating Observable');
    const test$ = of(test).pipe(delay(1000));

    test$.subscribe(() => {
      test = true;
    });

    tick(1000);

    expect(test).toBe(true);
  }));

});
