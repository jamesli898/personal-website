import React from 'react';
import CourseworkTile from './CourseworkTile';

const courses = [
  {
  courseworkdatecourse: 'Current',
  courseworkheader: 'SportVue',
  courseworkdescription: 'Building an ice hockey earpiece to track a player’s head orientation and a complementary mobile app that will allow players to track their metrics during games and practices',
  },
];

class Coursework extends React.Component {
  render() {
    return (
      <div className = 'Experience-section'>
        {projects.map((item) => (<ExperienceTile {...item}/>))}
      </div>
      //<Modal {...person} title='Modal heading' animation={false} />
      //is equal to
      //<Modal name={person.name} age={person.age} title='Modal heading' animation={false} />
    );
  }
}

export default Coursework;
