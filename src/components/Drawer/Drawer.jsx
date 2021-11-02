import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MicIcon from '@mui/icons-material/Mic';
import AlbumIcon from '@mui/icons-material/Album';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import DeezerLogo from './DeezerLogo';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Accueil'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <NavLink
                  exact
                  to="/"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <HomeIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              ) : (
                ''
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Artiste', 'Album'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <NavLink
                  exact
                  to="/artist"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <MicIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/album"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <AlbumIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
        {['Genre', 'Playlist'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <NavLink
                  exact
                  to="/gender"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <MusicNoteIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/library"
                  style={{ textDecoration: 'none', display: 'flex' }}
                >
                  <LibraryMusicIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ height: '6rem' }} />
      <ListItem>
        <ListItemIcon>
          <CopyrightIcon />
          <Typography marginLeft="2rem">Copyright</Typography>
        </ListItemIcon>
      </ListItem>
      <Typography marginLeft="4.5rem" lineHeight="3">
        <a href="https://www.linkedin.com/in/ga%C3%ABl-aury-%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-d%C3%A9veloppeur-web-junior-06749b21b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxSsUkC1bTjW01HibxQLt3Q%3D%3D">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Gael6712">
          <GitHubIcon />
        </a>
        Gael
        <br />
        <a href="https://www.linkedin.com/in/jimmyjung67?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA2nx25p5SLuLbVkCBvxHpA%3D%3D">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/rosko278">
          <GitHubIcon />
        </a>
        Jimmy
        <br />
        <a href="https://www.linkedin.com/in/th%C3%A9o-muller-6b39761b8/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/TheoMuller510">
          <GitHubIcon />
        </a>
        Theo
        <br />
        <a href="https://www.linkedin.com/in/yoann-boisson/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/YoannBoisson">
          <GitHubIcon />
        </a>
        Yoann <MenuIcon />
        <br />
        <a href="https://www.deezer.com/">
          <DeezerLogo />
        </a>
      </Typography>
    </Box>
  );
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
