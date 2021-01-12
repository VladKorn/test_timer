import React, { useState, useEffect } from "react";
import timerStore from "./store";
import { Button } from "antd";
import {
	StopFilled,
	PlayCircleFilled,
	PauseCircleFilled,
	UndoOutlined,
} from "@ant-design/icons";

interface Props {}

const Controls = (props: Props) => {
	const [isPaused, setIsPaused] = useState(true);
	const [isClickInDelay, setIsClickInDelay] = useState(false);
	useEffect(() => {
		const sub = timerStore.isPaused$.subscribe(setIsPaused);
		return () => sub.unsubscribe();
	}, []);
	const startToggle = () => {
		if (isPaused) {
			timerStore.reset$.next();
		} else {
			timerStore.isPaused$.next(true);
		}
	};

	const toggle = () => {
		if (isClickInDelay) return false;

		timerStore.isPaused$.next(!isPaused);
		setInterval(() => {
			setIsClickInDelay(false);
		}, 300);
		setIsClickInDelay(true);
	};
	const reset = () => {
		timerStore.reset$.next();
	};

	return (
		<div className="timer-controls">
			<Button
				type="primary"
				size="large"
				onClick={startToggle}
				icon={isPaused ? <PlayCircleFilled /> : <StopFilled />}
			>
				{isPaused ? "Start" : "Stop"}
			</Button>
			<Button
				type="primary"
				size="large"
				disabled={
					(isPaused && timerStore.seconds$.value === 0) ||
					isClickInDelay
						? true
						: false
				}
				onClick={toggle}
				icon={isPaused ? <PlayCircleFilled /> : <PauseCircleFilled />}
			>
				Wait
			</Button>
			<Button
				type="primary"
				size="large"
				disabled={
					isPaused && timerStore.seconds$.value === 0 ? true : false
				}
				onClick={reset}
				icon={<UndoOutlined />}
			>
				Reset
			</Button>
		</div>
	);
};

export default Controls;
