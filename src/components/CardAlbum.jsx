import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardAlbum(/* {album} */) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://e-cdns-images.dzcdn.net/images/artist/e402a53b62e6717c1c7621dc336b1ce3/250x250-000000-80-0-0.jpg" /* src={album.cover_medium} */
          alt="" /* alt={album.title} */
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Album title
            {/* {album.title} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
