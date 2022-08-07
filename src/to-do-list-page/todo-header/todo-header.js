import { AppBar, Avatar, Box, IconButton, Modal, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersData } from '../../to-do-list-data';

const style = {
  width: '384px',
  height: '126px',
  margin: '57px 0px 0px 1490px',
  background: '#232323',
  border: '0px !important',
  display: 'flex',
};

export default function ToDoHeader(props) {
  const {
    email,
    displayCloseIcon, setDisplayCloseIcon,
    displayWarningMessage, setDisplayWarningMessage
  } = props;

  const navigate = useNavigate();

  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const { user_profile } = usersData.find(userObj => userObj.user_email === email);

  const LogoutModal = () => {
    return (
      <Modal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            alt={user_profile} src={"./users-profiles/" + user_profile}
            style={{ width: '69.25px', height: '69.25px', margin: '23px 0px 0px 24.64px' }}
            onClick={() => setOpenLogoutModal(true)}
          />
          <div style={{ display: 'block', margin: '26px 0px 0px 0px' }} >
            <span
              style={{
                width: '344px', height: '21px', fontSize: '18px', fontWeight: '100',
                backgroundColor: 'transparent', color: '#B6A3C2', margin: '0px 0px 0px 23px', letterSpacing: '0px'
              }}
            >
              {email}
            </span>
            <div
              style={{ display: 'flex' }}
              onClick={() => navigate("/")}
            >
              <span
                style={{
                  height: '21px', fontSize: '18px', fontWeight: '100',
                  backgroundColor: 'transparent', color: '#FFFFFF', margin: '20.48px 0px 0px 65.61px', letterSpacing: '0px'
                }}
              >
                {"Log Out"}
              </span>
              <img src="./todo-page/Logout.svg" alt="login_image" width={"20px"} height={"17px"} style={{ margin: '26.48px 0px 0px 11.03px' }} />
            </div>

          </div>
        </Box>
      </Modal >
    );
  };

  return (
    <AppBar position="fixed" style={{ width: '1920px', height: '68px', padding: '0px', backgroundColor: '#222222', left: '0' }}>
      <Toolbar style={{ display: 'block', width: '1920px', height: '68px', minHeight: '68px', padding: '0px', backgroundColor: '#222222' }}>
        {/* Search, Add and Logout */}
        <div style={{ display: 'flex', width: '1920px', height: '68px', fontSize: '10px', backgroundColor: '#222222', color: '#9B9B9B' }}>
          <img src="./todo-page/SmallLogo.png" alt="login_image" width={"94px"} height={"57px"} style={{ margin: '5px 0px 0px 34px' }} />
          <div variant="h6" component="div" style={{ flexGrow: 1 }}></div>
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
          <Avatar
            alt={user_profile} src={"./users-profiles/" + user_profile}
            style={{ width: '42px', height: '42px', margin: '13px 45.38px 0px 0px' }}
            onClick={() => setOpenLogoutModal(true)}
          />
          <LogoutModal />
        </div>


        {/* Quote */}
        {displayWarningMessage &&
          <div
            style={{ display: 'flex', width: '1920px', height: '68px', background: 'linear-gradient(to bottom, #6E4C85 0%, #2D2B52 100%)' }}
            onMouseEnter={() => setDisplayCloseIcon(true)}
            onMouseLeave={() => setDisplayCloseIcon(false)}
          >
            <span
              style={{
                width: '344px', height: '21px', fontSize: '18px', fontStyle: 'italic', fontWeight: '100',
                backgroundColor: 'transparent', color: '#FFFFFF', margin: '24px 0px 0px 44px', letterSpacing: '0px'
              }}
            >
              {'"Anthing that can go wrong, will go wrong!"'}
            </span>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            {displayCloseIcon &&
              <div onClick={() => setDisplayWarningMessage(false)}>
                <img src="./todo-page/RemoveQuote.svg" alt="logo" width={"21px"} height={'21px'} style={{ margin: '23.5px 52.5px 0px 0px' }} />
              </div>
            }
          </div>
        }


        {/* ToDo Headers */}
        <div style={{ display: 'flex', width: '1920px', height: '80px', fontSize: '10px', backgroundColor: '#5B5E60', color: '#9B9B9B' }}>
          <div
            style={{
              display: 'flex', color: '#ffffff', background: '#212529', borderRadius: '7px',
              width: '422.32px', height: '48px', margin: '32px 0px 0px 34.04px',
              boxShadow: '0px 3px 6px #00000029',
            }}
          >
            <img src="./todo-page/ToDoIcon.png" alt="logo" width={"21.94px"} height={'23px'} style={{ margin: '13px 0px 0px 19.21px' }} />
            <span style={{ color: '#ffffff', margin: '14px 13.75px', fontSize: '18px' }} >{'To Do'}</span>
          </div>
          <div
            style={{
              display: 'flex', color: '#ffffff', background: '#212529', borderRadius: '7px',
              width: '422.32px', height: '48px', margin: '32px 0px 0px 28.64px',
              boxShadow: '0px 3px 6px #00000029',
            }}
          >
            <img src="./todo-page/DoingIcon.png" alt="logo" width={"21.94px"} height={'23px'} style={{ margin: '13px 0px 0px 19.21px' }} />
            <span style={{ color: '#ffffff', margin: '14px 14.75px', fontSize: '18px' }} >{'Doing'}</span>
          </div>
          <div
            style={{
              display: 'flex', color: '#ffffff', background: '#212529', borderRadius: '7px',
              width: '422.32px', height: '48px', margin: '32px 0px 0px 29px',
              boxShadow: '0px 3px 6px #00000029',
            }}
          >
            <img src="./todo-page/DoneIcon.png" alt="logo" width={"21.94px"} height={'23px'} style={{ margin: '13px 0px 0px 19.21px' }} />
            <span style={{ color: '#ffffff', margin: '14px 16.57px', fontSize: '18px' }} >{'Done'}</span>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          {!displayWarningMessage &&
            <div onClick={() => setDisplayWarningMessage(true)}>
              <img src="./todo-page/ShowQuote.svg" alt="logo" width={"24px"} height={'24px'} style={{ margin: '40px 52.51px 0px 0px' }} />
            </div>
          }
        </div>
      </Toolbar>
    </AppBar >
  );
};