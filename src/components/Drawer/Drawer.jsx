import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Paper } from '@material-ui/core';
import { Avatar } from '@mui/material';
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
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import DeezerLogo from './DeezerLogo';
import AvatarYo from './images/AvatarYo.png';
import AvatarTheo from './images/AvatarTheo.png';
import AvatarJimmy from './images/AvatarJimmy.png';
import AvatarGael from './images/AvatarGael.png';

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
    <Paper
      style={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,
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
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#607d8b',
                  }}
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
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#607d8b',
                  }}
                >
                  <MicIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/album"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#607d8b',
                  }}
                >
                  <AlbumIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
        {['Genre', 'Radio'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <NavLink
                  exact
                  to="/gender"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#607d8b',
                  }}
                >
                  <MusicNoteIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/library"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    color: '#607d8b',
                  }}
                >
                  <LibraryMusicIcon />
                  <ListItemText primary={text} style={{ marginLeft: '2rem' }} />
                </NavLink>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ height: 10 }} />
      <Paper sx={{ height: '7rem' }} />
      <ListItem>
        <ListItemIcon>
          <CopyrightIcon style={{ ml: '1rem', color: '#607d8b' }} />
          <Typography style={{ ml: '1rem', color: '#607d8b' }}>
            Copyright
          </Typography>
        </ListItemIcon>
      </ListItem>
      <Typography marginLeft="1rem" lineHeight="3">
        <ListItem>
          <ListItemIcon>
            <a href="https://www.linkedin.com/in/ga%C3%ABl-aury-%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-d%C3%A9veloppeur-web-junior-06749b21b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxSsUkC1bTjW01HibxQLt3Q%3D%3D">
              <Avatar src={AvatarGael} sx={{ mr: 2 }} />
            </a>
            <Typography variant="h7" style={{ color: '#607d8b' }}>
              Gael
            </Typography>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a href="https://www.linkedin.com/in/jimmyjung67?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA2nx25p5SLuLbVkCBvxHpA%3D%3D">
              <Avatar src={AvatarJimmy} sx={{ mr: 2 }} />
            </a>
            <Typography variant="h7" style={{ color: '#607d8b' }}>
              Jimmy
            </Typography>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a href="https://www.linkedin.com/in/th%C3%A9o-muller-6b39761b8/">
              <Avatar src={AvatarTheo} sx={{ mr: 2 }} />
            </a>
            <Typography variant="h7" style={{ color: '#607d8b' }}>
              Theo
            </Typography>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a href="https://www.linkedin.com/in/yoann-boisson/">
              <Avatar src={AvatarYo} sx={{ mr: 2 }} />
            </a>
            <Typography variant="h7" style={{ color: '#607d8b' }}>
              Yoann
            </Typography>
          </ListItemIcon>
        </ListItem>
        <br />
        <a href="https://www.deezer.com/">
          <DeezerLogo />
        </a>
      </Typography>
    </Paper>
  );
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: 'white' }} />
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
