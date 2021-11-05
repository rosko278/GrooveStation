import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardArtist(/* {artist} */) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: '100px' }}
          component="img"
          image="https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg" /* src={artist.picture_medium} */
          alt="" /* alt={artist.name} */
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artist name
            {/* {artist.name} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
