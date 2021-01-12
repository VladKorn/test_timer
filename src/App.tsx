import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Timer from "./components/Timer/index";

function App() {
	return (
		<div className="App">
			<Timer></Timer>
			<footer>
				<ul>
					<li>
						<a href="https://github.com/VladKorn">github</a>
					</li>
					<li>
						<a href="https://t.me/KornienkoVladimirVladimirovich">
							telegram
						</a>
					</li>
					<li>
						<a href="mailto:webvladkorn@gmail.com">
							webvladkorn@gmail.com
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
