import React from 'react';
import HikeTile from '../components/HikeTile'

class HikesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hikes: this.props.initialHikes
    }
    // this.updateHikes = this.updateHikes.bind(this);
  }

  // updateHikes() {
  //   fetch('/api/v1/hikes').
  //   then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       throw new Error("Cannot fetch updated hikes");
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     if (json.hikes[0].updated_at !== this.state.hikes[0].updated_at) {
  //       this.setState({hikes: json.hikes})
  //     }
  //   })
  //   .catch(err => console.error(err.message))
  // }
  //
  // componentDidMount() {
  //   this.updateHikes();
  //   this.updateInterval = setInterval(this.updateHikes, 1000)
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.updateInterval);
  // }
  // let hikeTiles = this.state.hikes.map(hike => {
  //   return(
  //     <HikeTile
  //       key={hike.id}
  //       hike={hike}
  //       />
  //   )
  // })

  // {hikeTiles}
  render() {
    return(
      <div id="current-hikes">
        <h2>Hikes</h2>
      </div>
    )
  }
}


export default HikesContainer;
