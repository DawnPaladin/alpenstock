import React from 'react';
const HelloMessage = ({ name }) => <h1>Hello, {name}!</h1>;

import Sticky from './Sticky';

export default ({ props }) => {
	return <Sticky size={350} color="#FDFFAA" boldHeader="Monday," mediumHeader="June 4">Test</Sticky>
}