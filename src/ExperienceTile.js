import React from 'react';
class ExperienceTile extends React.Component {
  render() {
    return (
      //how do i input dofferent text for this.props.text?
      <div className = 'ExperienceTile-section'>
        <p classname = 'ExperienceTileDate' align = 'left'>
        {this.props.experiencedate}
        </p>
        <h3 classname = 'ExperienceTileHeader' align = 'left'>
        {this.props.experienceheader}
        </h3>  
        <p classname = 'ExperienceTileDescription' align = 'left'>
        {this.props.experiencedescription}
        </p>
        <h5 classname = 'ExperienceTileToolsHeader' align = 'left'>
        {this.props.experiencetoolsheader}
        </h5>
        <p classname = 'ExperienceTileTools' align = 'left'>
        {this.props.experiencetools}
        </p>
      </div>
    );
  }
}

export default ExperienceTile;
