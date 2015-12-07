'use strict';

import React from 'react';

let names = ['Angle', 'Emily', 'Kate', 'Smith'];

export default class NoteArr extends React.Component{
	render() {
			return <ul>{
				names.map((name, idx) => <li key={idx}>{name}</li>)
			}</ul>;
	}

}