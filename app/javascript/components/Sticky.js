import React, { useState, useEffect } from 'react';

const Sticky = props => {
	const [color, setColor] = useState(props.color);
	const [size, setSize] = useState(props.size);
	const [boldHeader, setBoldHeader] = useState(props.boldHeader);
	const [mediumHeader, setMediumHeader] = useState(props.mediumHeader);

	return <div className='sticky' style={{
		backgroundColor: color,
		height: size,
		maxWidth: size,
	}}>
		<header>
			<strong>{boldHeader} </strong>
			{mediumHeader}
		</header>
	</div>
}

export default Sticky;