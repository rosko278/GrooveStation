import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, Typography } from '@material-ui/core';
import { PlayArrow } from '@mui/icons-material';
import CustomThemeProvider from '../../theme/CustomThemeProvider';
import theme from '../../theme/base';

const card = (
  <Box display="flex" margin="15px" alignItems="center" width="300">
    <Typography variant="h5">01</Typography>
    <img
      alt="Alt-J"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXpmvydKScOjv5fPPXHVK69ExHZxp90bedg&usqp=CAU"
      width="120"
      height="120"
    />
    <CardContent>
      <Typography variant="h5">Alt-J</Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        Au dela des Fréquences
      </Typography>
    </CardContent>
    <PlayArrow />
  </Box>
);

export default function OutlinedCard() {
  return (
    <CustomThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: 400,
          backgroundColor: 'primary',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Card>{card}</Card>
        <Card>{card}</Card>
        <Card>{card}</Card>
      </Box>
    </CustomThemeProvider>
  );
}

//    <CardMedia
//         component="img"
//         image="https://www.heavylaw.com/content/images/2020/08/117171603_3221152977941031_4550249671312018007_o.jpg"
//         alt="Live from space album cover"
//       />
//       <CardContent sx={{ minWidth: 120 }}>
//         <Typography variant="h5" component="div"></Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.primary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//         <CardActions>
//           <Button size="small">Play</Button>
//         </CardActions>
//       </CardContent>
//       <Divider />
