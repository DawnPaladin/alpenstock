import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Task from './Task';

const Sticky = props => {
	const [color, setColor] = useState(props.color);
	const [size, setSize] = useState(props.size);
	const [boldHeader, setBoldHeader] = useState(props.boldHeader);
	const [mediumHeader, setMediumHeader] = useState(props.mediumHeader);
	const [tasks, setTasks] = useState(props.tasks || []);

	const shouldTruncate = size == 'small';
	const taskComponents = tasks.map((task, index) => <Task isCompleted={task.isCompleted} text={task.text} shouldTruncate={shouldTruncate} key={index} />);

	return <div className={classNames('sticky', size)} style={{
		backgroundColor: color,
	}}>
		<header>
			<strong>{boldHeader} </strong>
			{mediumHeader}
		</header>
		{taskComponents}
	</div>
}

export default Sticky;