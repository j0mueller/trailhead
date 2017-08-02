import React from 'react';

const HikeTile = props => {
  // let imageSrc
  // if (props.hike.image) {
  //   imageSrc = props.hike.movie.poster.thumb.url;
  // }
  // let movieLink = `/movies/${props.hike.movie.id}`
  return(
    <div className="hike-tile">
      <div className="row">
        // <div className="thumb-container">
        //   <img src={imageSrc} />
        // </div>
        <div className="small-10 columns">
        <div>Hike Tile Placeholder</div>
          // <a href={movieLink}>
          //   <span className="movie-name">{props.hike.movie.name}</span>
          // </a>
          // <span className="rating"><b>Location:</b> {props.hike.location}</span>
          // <span className="hiker"><b> - Reviewed By:</b> {props.hike.user.username}</span><br/>
          // <hr />
          // <p className="hike-body">{props.hike.body}</p>
        </div>
      </div>
    </div>
  )
}

export default HikeTile;
