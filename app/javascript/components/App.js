import React from 'react';

import WeekDrawer from './WeekDrawer';
import ActiveDay from './ActiveDay';
import TaskListsDrawer from './TaskListsPane';

export default ({ props }) => {
	return <div>
		<WeekDrawer/>
		<ActiveDay/>
		<TaskListsDrawer/>
	</div>
}