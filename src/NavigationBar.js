import React from 'react';
class NavigationBar extends React.Component {
render() {
    return (
        <div className = "NavigationBar-section">
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Connect</li>
          </ul>
        </div>
    );
  }
}

export default NavigationBar;