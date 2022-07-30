import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

export default function ToDoHeader() {

  const [displayCloseIcon, setDisplayCloseIcon] = useState(false);
  const [displayWarningMessage, setDisplayWarningMessage] = useState(true);
  return (
    <AppBar position="fixed" style={{ width: '100%', height: '50px', padding: '0px', backgroundColor: '#222222' }}>
      <Toolbar style={{ display: 'block', width: '100%', height: '50px', minHeight: '50px', padding: '0px', backgroundColor: '#222222' }}>
        <div
          style={{
            display: 'flex', width: '100%', height: '50px', fontSize: '10px', backgroundColor: '#222222', color: '#9B9B9B'
          }}
        >
          <img src="./logo/logo.png" alt="login_image" width={"70px"} style={{ marginLeft: '25px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon style={{ color: '#AB8BC4' }} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ControlPointIcon style={{ color: '#AB8BC4' }} />
          </IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '28px', height: '28px', margin: 'auto 30px auto 0px' }} />
        </div>
        {displayWarningMessage &&
          <div
            style={{ display: 'flex', width: '100%', height: '40px', background: 'linear-gradient(to bottom, #674980 0%, #312D55 100%)' }}
            onMouseEnter={() => setDisplayCloseIcon(true)}
            onMouseLeave={() => setDisplayCloseIcon(false)}
          >
            <span style={{
              height: '40px', fontSize: '10px', fontStyle: 'italic', backgroundColor: 'transparent', color: '#CCC8D5',
              margin: '11px 0px 0px 25px'
            }}
            >
              "Anthing that can go wrong, will go wrong!"
            </span>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            {displayCloseIcon &&
              <div
                style={{ color: '#ffffff', margin: '7px 20px 0px 0px' }}
                onClick={() => setDisplayWarningMessage(false)}
              >
                <CloseIcon style={{ color: '#ffffff' }} />
              </div >
            }
          </div>}
        <div
          style={{
            display: 'flex', width: '100%', height: '50px', fontSize: '10px', backgroundColor: '#222222', color: '#9B9B9B'
          }}
        >
          <img src="./logo/logo.png" alt="login_image" width={"70px"} style={{ marginLeft: '25px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon style={{ color: '#AB8BC4' }} />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ControlPointIcon style={{ color: '#AB8BC4' }} />
          </IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '28px', height: '28px', margin: 'auto 30px auto 0px' }} />
        </div>
      </Toolbar>
    </AppBar >
  );
};