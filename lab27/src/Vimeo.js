import React, { useEffect } from 'react';
import Player from '@vimeo/player';

const Vimeo = ({ id = 19231868, width = 640 }) => {
  let player = null;
  useEffect(() => {
    player = new Player('vimeo-player', {id, width});
    player.on('play', function() {
      console.log('played the video!');
    });
  }, []);
  return <div id="vimeo-player"></div>;
};

export default Vimeo;
