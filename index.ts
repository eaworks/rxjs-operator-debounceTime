import { map, debounceTime, fromEvent } from 'rxjs';

// const searchBox = document.getElementById('search');
// const keyup$ = fromEvent(searchBox, 'keyup');
// keyup$
//   .pipe(
//     map((i: any) => i.currentTarget.value),
//     debounceTime(2000)
//   )
//   .subscribe(console.log);

const sliderInput = document.querySelector('input#slider');
fromEvent(sliderInput, 'input')
  .pipe(
    map((event) => event.target['value']),
    debounceTime(2000)
  )
  .subscribe((value) => console.log(value));
