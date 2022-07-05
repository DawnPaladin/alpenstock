import React from 'react';

import WeekDrawer from './WeekDrawer';
import TaskListsDrawer from './TaskListsPane';

export default ({ props }) => {
	return <div>
		<WeekDrawer/>
		<TaskListsDrawer/>
	</div>
}