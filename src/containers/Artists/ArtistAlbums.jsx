import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Redux
import apiGetAlbums from '../../api/apiArtistAlbums';

// alerts
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';

function ArtistTopTracks() {
  const artist = useSelector((state) => state.artistAlbums);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(apiGetAlbums(id));
  }, [dispatch]);

  if (artist.isLoading) {
    return <Loading />;
  }

  if (artist.error) {
    return (
      <Error errorMsg="Impossible de charger la liste d'albums de l'artiste" />
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Date de sortie</TableCell>
            <TableCell align="right">Fans</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artist.albums.map((row) => (
            <TableRow
              hover
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.release_date}</TableCell>
              <TableCell align="right">{row.fans}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ArtistTopTracks;
