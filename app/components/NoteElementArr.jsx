'use strict';

import React from 'react';

let elements = [<h1>Hello world</h1>, <h2>React is awesome</h2>];

export default class NoteElementArr extends React.Component {
	render() {
		return <div>{elements}</div>;
	}
}