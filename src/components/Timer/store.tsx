import { Subject, BehaviorSubject } from "rxjs";

const seconds$ = new BehaviorSubject<number>(0);
// seconds$.subscribe(console.log);

const isPaused$ = new Subject<boolean>();
isPaused$.subscribe(console.log);

const reset$ = new Subject();
reset$.subscribe(console.log);

let intId: NodeJS.Timeout | null = null;
reset$.subscribe(() => {
	intId && clearInterval(intId);
	seconds$.next(0);
	isPaused$.next(false);
});
isPaused$.subscribe((isPaused) => {
	// console.log("isPaused", isPaused, seconds$.value);
	if (!isPaused) {
		intId = setInterval(() => {
			seconds$.next(seconds$.value + 32);
		}, 32);
	} else {
		intId && clearInterval(intId);
	}
});

// const timer$ = timer(0, 1000).pipe(
// 	map((x) => {
// 		return x;
// 	}),
// 	takeUntil(isPaused$),
// 	repeatWhen(() => reset$)
// );

const timerStore = {
	seconds$: seconds$,
	isPaused$: isPaused$,
	reset$: reset$,
};
export default timerStore;
