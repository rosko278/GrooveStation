import * as React from 'react';
import { Paper } from '@material-ui/core';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { Chip, Typography } from '@mui/material';
import { apiGetChartPlaylist } from '../api/apiChartPlaylist';

export default function PopularSongs() {
  const dispatch = useDispatch();
  const chartPlaylist = useSelector((state) => state.chartPlaylist);

  React.useEffect(() => {
    dispatch(apiGetChartPlaylist());
  }, [dispatch]);

  return (
    <Paper square elevation={5} style={{ borderRadius: 12 }}>
      <Chip
        label="PLAYLIST DU MOMENT"
        sx={{
          background: '#607d8b',
          color: '#FFF',
          ml: 10,
          mb: 5,
          fontSize: 20,
        }}
      />
      {chartPlaylist.top.map((content) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={content.picture_small} />
          </ListItemAvatar>
          <ListItemText primary={content.title} />
          <Typography style={{ fontSize: 12, fontStyle: 'italic' }}>
            {`Titres : ${content.nb_tracks}`}{' '}
          </Typography>
        </ListItem>
      ))}
    </Paper>
  );
}
