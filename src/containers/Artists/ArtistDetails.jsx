import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import apiArtistInfos from '../../api/apiArtist';

// alerts
import Loading from '../../components/Loading';
import Error from '../../components/ErrorMessage';

// containers
import ArtistTopTracks from './ArtistTopTracks';
import ArtistAlbums from './ArtistAlbums';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

function ArtistDetails() {
  const artist = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  const { id } = useParams();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    dispatch(apiArtistInfos(id));
  }, [dispatch]);

  if (artist.isLoading) {
    return <Loading />;
  }

  if (artist.error) {
    return <Error errorMsg="Impossible de charger les données de l'artiste" />;
  }
  return (
    <>
      <Box
        sx={{
          height: '500px',
          background: `url('${artist.info.picture_xl}') no-repeat center`,
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          minHeight: 200,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
            centered
          >
            <Tab label="Morceaux populaires" {...a11yProps(0)} />
            <Tab label="Albums" {...a11yProps(1)} />
            <Tab label="Apparait dans" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ArtistTopTracks />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ArtistAlbums />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Apparait dans
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}

export default ArtistDetails;
