import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import apiTrack from '../api/apiTracks';
import Loading from '../components/Loading';
import Error from '../components/ErrorMessage';
import PlayButton from '../components/PlayButton';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function TrackCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const track = useSelector((state) => state.track);
  useEffect(() => {
    dispatch(apiTrack(id));
  }, [dispatch]);

  if (track.isLoading || Object.entries(track.track).length === 0) {
    return <Loading />;
  }

  if (track.error || Object.entries(track.track).length === 0) {
    return <Error errorMsg="Impossible de charger les données de la musique" />;
  }

  return (
    <div>
      <h2>{`${track.track.artist.name} - ${track.track.title}`}</h2>

      <Paper
        square
        elevation={10}
        style={{
          textAlign: 'center',
          height: '82vh',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper square elevation={0}>
                <img
                  src={track.track.album.cover_medium}
                  alt={track.track.album.title}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              <Paper square elevation={0}>
                <Root>
                  <Divider sx={{ marginBottom: 1 }}>
                    <Chip
                      label="APERCU"
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  <PlayButton url={track.track.preview} />
                  <Divider sx={{ marginBottom: 1 }}>
                    <Chip
                      label="TITRE"
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  {track.track.title}
                  <Divider sx={{ marginBottom: 1 }}>
                    <Chip
                      label="ALBUM"
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  {track.track.album.title}
                  <Divider>
                    <Chip
                      label={
                        track.track.contributors.length === 1
                          ? 'ARTISTE'
                          : 'ARTISTES'
                      }
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  <ul
                    style={{
                      listStyle: 'none',
                      marginLeft: 0,
                      paddingLeft: 0,
                    }}
                  >
                    {track.track.contributors.map((contributor) => (
                      <li>{contributor.name}</li>
                    ))}
                  </ul>
                  <Divider sx={{ marginBottom: 1 }}>
                    <Chip
                      label="DATE DE SORTIE"
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  {track.track.release_date}
                  <Divider sx={{ marginBottom: 1 }}>
                    <Chip
                      label="BPM"
                      sx={{ background: '#607d8b', color: '#FFF' }}
                    />
                  </Divider>
                  {track.track.bpm === 0 ? 'Non défini' : track.track.bpm}
                </Root>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
