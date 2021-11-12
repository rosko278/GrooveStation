import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams, Link } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import apiGetTopTracks from '../../api/apiArtistTopTracks';

// alerts
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';

// import util function
import convertDuration from '../../core/functions/convertDuration';
import PlayButton from '../../components/PlayButton';

function ArtistTopTracks() {
  const tracks = useSelector((state) => state.artistTopTracks);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(apiGetTopTracks(id));
  }, [dispatch]);

  if (tracks.isLoading) {
    return <Loading />;
  }

  if (tracks.error) {
    return <Error errorMsg="Impossible de charger les données de l'artiste" />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell align="right">Durée</TableCell>
            <TableCell align="right">Aperçu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.top.map((row) => (
            <TableRow
              hover
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/track/${row.id}`}>{row.title}</Link>
              </TableCell>
              <TableCell align="right">
                {convertDuration(row.duration)}
              </TableCell>
              <TableCell align="right">
                <PlayButton url={row.preview} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ArtistTopTracks;
