import * as React from 'react';
import { Paper } from '@material-ui/core';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
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
    <Paper
      square
      elevation={5}
      style={{ borderRadius: 12, textAlign: 'center' }}
    >
      <Chip
        label="PLAYLIST DU MOMENT"
        sx={{
          background: '#607d8b',
          color: '#FFF',
          mb: 5,
          fontSize: 20,
        }}
      />
      {chartPlaylist.top.map((content) => (
        <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemAvatar>
            <Avatar src={content.picture_small} />
          </ListItemAvatar>
          <Link
            to={`/playlist/${content.id}`}
            className="trackLink"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <ListItemText primary={content.title} />
          </Link>
          <Typography
            style={{
              fontSize: 12,
              fontStyle: 'italic',
            }}
          >
            {`Titres : ${content.nb_tracks}`}
          </Typography>
        </ListItem>
      ))}
    </Paper>
  );
}
