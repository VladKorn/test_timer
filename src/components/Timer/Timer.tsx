import React, { useState, useEffect } from "react";
import timerStore from "./store";
import { Duration } from "luxon";
interface Props {}

const Timer = (props: Props) => {
	const [time, setTime] = useState(0);
	useEffect(() => {
		const sub = timerStore.seconds$.subscribe(setTime);
		return () => sub.unsubscribe();
	}, []);
	const dateOb = Duration.fromMillis(time);
	const timeFormated = dateOb.toFormat(`hh':'mm':'SS`);
	return <div className="timer">{timeFormated}</div>;
};

export default Timer;
