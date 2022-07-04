import React, { useState, useEffect } from 'react';

const Sticky = props => {
	const [color, setColor] = useState(props.color);
	const [size, setSize] = useState(props.size);
	const [boldHeader, setBoldHeader] = useState(props.boldHeader);
	const [mediumHeader, setMediumHeader] = useState(props.mediumHeader);

	return <div className='sticky' style={{
		backgroundColor: color,
		height: size,
		width: size,
		boxShadow: "5px 5px 5px gray",
		padding: 10,
		fontSize: 24
	}}>
		<header>
			<strong>{boldHeader} </strong>
			{mediumHeader}
		</header>
	</div>
}

export default Sticky;