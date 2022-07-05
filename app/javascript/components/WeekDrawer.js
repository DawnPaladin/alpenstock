import React from "react";

import Sticky from "./Sticky";

const weekOfStickies = [
	<Sticky size={150} color="#FDFFAA" boldHeader="Sunday,"    mediumHeader="December 23" key={1} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Monday,"    mediumHeader="December 24" key={2} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Tuesday,"   mediumHeader="December 25" key={3} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Wednesday," mediumHeader="December 26" key={4} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Thursday,"  mediumHeader="December 27" key={5} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Friday,"    mediumHeader="December 28" key={6} />,
	<Sticky size={150} color="#FDFFAA" boldHeader="Saturday,"  mediumHeader="December 29" key={7} />
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
		<button className="toggle-drawer">V</button>
	</div>
}