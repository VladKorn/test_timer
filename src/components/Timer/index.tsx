import React from "react";
import Timer from "./Timer";
import Controls from "./Controls";
import "./index.css";

interface Props {}

const index = (props: Props) => {
	return (
		<section className="sct-timer">
			<Timer />
			<Controls />
		</section>
	);
};

export default index;
