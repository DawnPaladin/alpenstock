import React from "react";

import Sticky from "./Sticky";

export default props => {
	return <div className="active-day">
		<Sticky size={250} color="#FDFFAA" boldHeader="Monday," mediumHeader="July 4"/>
	</div>
}