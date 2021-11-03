import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { PropTypes } from 'prop-types';

const PlayButton = ({ url }) => {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setPlaying] = useState(false);

  const toggle = () => setPlaying(!isPlaying);

  useEffect(() => {
    return isPlaying ? audio.play() : audio.pause();
  }, [audio, isPlaying]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  });

  return (
    <Fab color="primary" aria-label="add" onClick={toggle}>
      {isPlaying ? <PlayCircleIcon /> : <PauseCircleIcon />}
    </Fab>
  );
};

PlayButton.propTypes = {
  url: PropTypes.node.isRequired,
};

export default PlayButton;
