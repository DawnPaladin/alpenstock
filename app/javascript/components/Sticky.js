import React, { useState, useEffect } from 'react';

import Task from './Task';

const Sticky = props => {
	const [color, setColor] = useState(props.color);
	const [size, setSize] = useState(props.size);
	const [boldHeader, setBoldHeader] = useState(props.boldHeader);
	const [mediumHeader, setMediumHeader] = useState(props.mediumHeader);
	const [tasks, setTasks] = useState(props.tasks || []);

	var taskComponents = tasks.map((task, index) => <Task isCompleted={task.isCompleted} text={task.text} key={index} />);

	return <div className='sticky' style={{
		backgroundColor: color,
		height: size,
		width: size,
	}}>
		<header>
			<strong>{boldHeader} </strong>
			{mediumHeader}
		</header>
		{taskComponents}
	</div>
}

export default Sticky;