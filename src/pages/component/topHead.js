import React, {useState, useRef, useContext} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import "./topHead.css"
import person from "./person.svg";
import {CurrentUserContext} from '../../contex/currentUser.js'

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

const TopHeaderLine = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };

    const handleLogout = () => {
        setCurrentUserState(state => ({
            ...state,
            isLogin: false,
        }))
    }  
      
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
    
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
    
        prevOpen.current = open;
      }, [open]);


    const handleClick = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <div className="header-top_handle">

        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    >

                    <Badge color="default" badgeContent={0}>
                        <SettingsIcon style={{fill: "white"}} />
                    </Badge>

                </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
        </div>
    </div>
                <Button aria-haspopup="true">
                    <Badge color="default" badgeContent={0}>
                        <NotificationsIcon style={{fill: "white"}} />
                    </Badge>
                 </Button>
                
            <Chip style={{fill: "white", color: 'white', border: "none"}} variant="outlined" label="Байтенов Ильяс" onClick={handleClick} avatar={<Avatar src={person} />} />

                <Button aria-haspopup="true">
                    <Badge color="default" badgeContent={0}>
                        <HelpIcon style={{fill: "white"}} />
                    </Badge>
                </Button>
                
        </div>
    )
}

export default TopHeaderLine