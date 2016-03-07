import React from 'react';
import $ from 'jquery';
import Note from './Note.jsx';
import NoteNameArr from './NoteNameArr.jsx';
import NoteElementArr from './NoteElementArr.jsx';
import Demo4 from './Demo4.jsx';
import Demo5 from './Demo5.jsx';
import Demo6 from './Demo6.jsx';
import Demo7 from './Demo7.jsx';
import Demo8 from './Demo8.jsx';
import Demo9 from './Demo9.jsx';
import Demo10 from './Demo10.jsx';
// import Demo11 from './Demo11.jsx';
// import Demo12 from './Demo12.jsx';
import Demo13 from './Demo13.jsx';

import Demo14 from './Demo14.jsx';

// const gistUrl = 'https://api.github.com/users/octocat/gists';
// const starUrl = 'https://api.github.com/search/repositories?q=javascript&sort=stars';

/*
  stateless component
  link : http://facebook.github.io/react/docs/reusable-components.html#stateless-functions
*/
export default ()=>{
  return (
    <div>
      <h2>Note</h2>
			<Note />

      <h2>NoteNameArr</h2>
			<NoteNameArr />

      <h2>NoteElementArr</h2>
			<NoteElementArr />

      <h2>Demo4</h2>
      <Demo4 name="John"/>

      <h2>Demo5</h2>
      <Demo5>
        <span>Hello</span>
        <span>World</span>
      </Demo5>

      <h2>Demo6</h2>
      <Demo6 title="Demo6"/>

      <h2>Demo7</h2>
      <Demo7 />

      <h2>Demo8</h2>
      <Demo8 />

      <h2>Demo9</h2>
      <Demo9 />

      <h2>Demo10</h2>
      <Demo10 />

      {/*
        <h2>Demo11</h2>
        <Demo11 source={gistUrl} />

        <h2>Demo12</h2>
        <Demo12 promise={$.getJSON(starUrl)}/>
      */}

      <h2>Demo13</h2>
      <Demo13 />
      
      
      <h2>Demo14</h2>
      <Demo14 />
    </div>
  );
};
