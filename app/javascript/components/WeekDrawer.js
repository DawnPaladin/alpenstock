import React from "react";

import Sticky from "./Sticky";

const sundayTasks = [
	{ isCompleted: true, text: "Find some jobs on jobs.ie" },
	{ isCompleted: false, text: "Find some jobs on irishjobs.ie" },
	{ isCompleted: false, text: "Apply to Terraso" }
]
const mondayTasks = [
	{ isCompleted: false, text: "Apply to Sana" },
	{ isCompleted: true, text: "Send resume to Caleb Runyon of GT Independence" },
	{ isCompleted: false, text: "Talk to Matt Vasquez and Caitlin Studley" }
]

const tuesdayTasks = [
	{ isCompleted: false, text: "Email Chris Davidson with my resume, skill areas, growth areas" },
	{ isCompleted: true, text: "Message Anebi on Slack" },
	{ isCompleted: false, text: "Prep resume for UI Front End Developer at Apple and send to Nanette Weddell on LinkedIn" }
]

const wednesdayTasks = [
	{ isCompleted: true, text: "Order light sockets for Holly" },
	{ isCompleted: false, text: "Sign up for makerspace forums" },
	{ isCompleted: false, text: "On Urithuru, connect Hyper Backup to Backblaze" }
]

const weekOfStickies = [
	<Sticky size="small" color="#FDFFAA" boldHeader="Sunday,"    mediumHeader="December 23" key={1} tasks={sundayTasks} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Monday,"    mediumHeader="December 24" key={2} tasks={mondayTasks} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Tuesday,"   mediumHeader="December 25" key={3} tasks={tuesdayTasks} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Wednesday," mediumHeader="December 26" key={4} tasks={wednesdayTasks} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Thursday,"  mediumHeader="December 27" key={5} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Friday,"    mediumHeader="December 28" key={6} />,
	<Sticky size="small" color="#FDFFAA" boldHeader="Saturday,"  mediumHeader="December 29" key={7} />
]

export default ({ props }) => {
	return <div className='week-drawer'>
		<div className="left-group">

		</div>
		<div className="stickies">
			{weekOfStickies}
		</div>
		<div className="right-group">

		</div>
		<button className="toggle-drawer">^</button>
	</div>
}