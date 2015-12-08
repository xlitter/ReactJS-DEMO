import React from 'react';

const names = ['Angle', 'Emily', 'Kate', 'Smith'];

export default class NoteArr extends React.Component {
  render() {
    names.push('Jim');
    return (
      <ul>
      {
        names.map((name, idx) => <li key={idx}>{name}</li>)
      }
      </ul>
    );
  }

}
