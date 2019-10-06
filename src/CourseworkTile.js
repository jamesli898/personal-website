import React from 'react';
class CourseworkTile extends React.Component {
  render() {
    return (
      <div className = 'CourseworkTile-section'>
        <p classname = 'CourseworkTileDateCourse' align = 'left'>
        {this.props.courseworkdatecourse}
        </p>
        <h3 classname = 'CourseworkTileHeader' align = 'left'>
        {this.props.courseworkheader}
        </h3>  
        <p classname = 'CourseworkTileDescription' align = 'left'>
        {this.props.courseworkdescription}
        </p>
      </div>
    );
  }
}

export default CourseworkTile;
