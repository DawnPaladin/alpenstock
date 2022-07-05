import React from 'react';

import Sticky from './Sticky';

const yellowStickySettings = {
	size: 250,
	color: '#FDFFAA',
}

const weekOfStickies = [
	<Sticky size={200} color="#FDFFAA" boldHeader="Sunday,"    mediumHeader="July 3" key={1} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Monday,"    mediumHeader="July 4" key={2} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Tuesday,"   mediumHeader="July 5" key={3} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Wednesday," mediumHeader="July 6" key={4} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Thursday,"  mediumHeader="July 7" key={5} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Friday,"    mediumHeader="July 8" key={6} />,
	<Sticky size={200} color="#FDFFAA" boldHeader="Saturday,"  mediumHeader="July 9" key={7} />
]

export default ({ props }) => {
	return <div className='overhead'>
		{weekOfStickies}
	</div>
}