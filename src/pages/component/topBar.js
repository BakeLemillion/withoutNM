import React, {useState, useContext} from 'react'
import './TopBar.css'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import TopHeaderLine from './topHead.js'

import {CurrentUserContext} from '../../contex/currentUser.js'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#212841',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  MuiToolbarRegular: {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }
  },
  appBarShift: {
    display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const TopBar = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openRes, setOpenRes] = useState(false);

  const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

  const handleClickAdd = () => {
    setOpenAdd(!openAdd);
  };

  const handleClickRes = () => {
    setOpenRes(!openRes);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="toopbar-hand">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
          <TopHeaderLine>

          </TopHeaderLine>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider className="hr-topBar"/>
        <List>

          <Link to="/" className="link-a">
              <ListItem button>
                <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                <ListItemText primary={"Объекты учета"} />
              </ListItem>
          </Link>

            <Link to="/map" className="link-a">
              <ListItem button>
                <ListItemIcon><LocationOnOutlinedIcon /></ListItemIcon>
                <ListItemText primary={"Карта"} />
              </ListItem>
            </Link>
            
            <ListItem button onClick={handleClickAdd}>
              <ListItemIcon><AddCircleOutlineOutlinedIcon /></ListItemIcon>
              <ListItemText primary={"Добавить"} />
              {openAdd ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            
            <Collapse in={openAdd} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Потребитель" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Счетчик" />
                </ListItem>
              </List>
            </Collapse>

            <Link to="/" className="link-a">
              <ListItem button onClick={handleClickRes}>
                <ListItemIcon><InvertColorsOutlinedIcon /></ListItemIcon>
                <ListItemText primary={"Ресурс"} />
                {openRes ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Link>

            <Collapse in={openRes} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Холодная вода" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Горячая вода" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Канализация" />
                </ListItem>
              </List>
            </Collapse>
        </List>
        <Divider />
      </Drawer>
      <main className='main_page-cont'>
        {props.children}
      </main>
    </div>
  )

}

export default TopBar