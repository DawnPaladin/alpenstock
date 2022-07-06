import React from "react";

import Sticky from "./Sticky";

const testTasks = [
	{ isCompleted: false, text: "First thing" },
	{ isCompleted: true,  text: "Second thing" }
]

export default props => {
	return <div className="active-day">
		<Sticky size={250} color="#FDFFAA" boldHeader="Monday," mediumHeader="July 4" tasks={testTasks} />
	</div>
}