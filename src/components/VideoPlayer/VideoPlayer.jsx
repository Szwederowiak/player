import React from 'react';

import './VideoPlayer.scss';

const VideoPlayer = (props) => {
  const classes = 'container ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default VideoPlayer;
