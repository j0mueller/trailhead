import React from 'react';
import HikeTile from '../components/HikeTile'

class HikesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hikes: this.props.initialHikes
    }
  }

  render() {
    return(
      <div id="current-hikes">
        <h2>Hikes</h2>
      </div>
    )
  }
}

export default HikesContainer;
