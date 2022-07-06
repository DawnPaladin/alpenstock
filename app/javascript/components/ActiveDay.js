import React from "react";

import Sticky from "./Sticky";

const wednesdayTasks = [
	{ isCompleted: true, text: "Order light sockets for Holly" },
	{ isCompleted: false, text: "Sign up for makerspace forums" },
	{ isCompleted: false, text: "On Urithuru, connect Hyper Backup to Backblaze" }
]

export default props => {
	return <div className="active-day">
		<Sticky size="large" color="#FDFFAA" boldHeader="Monday," mediumHeader="July 4" tasks={wednesdayTasks} />
	</div>
}