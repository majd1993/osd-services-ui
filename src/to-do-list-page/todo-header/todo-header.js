import { AppBar, Avatar, Box, InputAdornment, Modal, styled, TextField, Toolbar, Tooltip, tooltipClasses, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersData } from '../../to-do-list-data';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "504.04px",
    height: "49.14px",
    borderRadius: '10px',
    border:'0px !important',
    fontSize: '12px !important',
  },
  textFieldInputProps: {
    width: "504.04px",
    height: "49.14px",
    fontSize: "12px",
    fontWeight: "200",
    fontFamily: "Arial, sans-serif",
    padding: "0px 0px 0px 10px !important",
    color: '#ffffff !important',
    border:'2px solid #B6A3C2',
    borderRadius: '20px  !important',
  },
}));

const logoutBoxStyle = {
  width: '384px',
  height: '126px',
  margin: '57px 0px 0px 1490px',
  background: '#232323',
  border: '1px solid #707070 !important',
  display: 'flex',
};

const CutomizedTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#5B5E60',
    color: '#FFFFFF',
    padding: '9px 9px 12px 13px',
  },
}));

export default function ToDoHeader(props) {
  const classes = useStyles();

  const {
    email,
    serachValue, setSearchValue,
    displayCloseIcon, setDisplayCloseIcon,
    displayWarningMessage, setDisplayWarningMessage,
    allToDoLists, setAllToDoLists,
  } = props;

  const navigate = useNavigate();

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const { user_profile } = usersData.find(userObj => userObj.user_email === email);

  const addItem = () => {
    let newAllToDoLists = { ...allToDoLists };

    // here we should call an api request to add the new item and get the id of as response.
    let nextId = getNextId(); // generate an id because i don't have an api yet
    let newItem = { id: nextId, title: 'New Item', Category: '', DueDate: '', Estimate: '', Importance: '' };

    newAllToDoLists = {
      ...newAllToDoLists,
      'To Do': [...newAllToDoLists['To Do'], newItem],//add item
    };

    setAllToDoLists({ ...newAllToDoLists })
  };

  const getNextId = () => { // get max of max ids in each status
    let ToDoListHigherId = allToDoLists['To Do'] && allToDoLists['To Do'].length > 0
      ? Math.max(...allToDoLists['To Do'].map((item) => { return item.id }))
      : -1;
    let DoingListHigherId = allToDoLists['Doing'] && allToDoLists['Doing'].length > 0
      ? Math.max(...allToDoLists['Doing'].map((item) => { return item.id }))
      : -1;
    let DoneListHigherId = allToDoLists['Done'] && allToDoLists['Done'].length > 0
      ? Math.max(...allToDoLists['Done'].map((item) => { return item.id }))
      : -1;

    return Math.max(ToDoListHigherId, DoingListHigherId, DoneListHigherId) + 1;
  };

  const LogoutModal = () => {
    return (
      <Modal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={logoutBoxStyle}>
          <Avatar
            alt={user_profile} src={"./users-profiles/" + user_profile}
            style={{ width: '69.25px', height: '69.25px', margin: '23px 0px 0px 24.64px' }}
            onClick={() => setOpenLogoutModal(true)}
          />
          <div style={{ display: 'block', margin: '26px 0px 0px 0px' }} >
            <span
              style={{
                width: '344px', height: '21px', fontSize: '18px', fontWeight: '100',
                backgroundColor: 'transparent', color: '#B6A3C2', margin: '0px 0px 0px 23.13px', letterSpacing: '0px'
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
          {showSearchInput
            ? <div style={{ display: 'flex', margin: '10.71px 22.63px 0px 0px', }}>
              <TextField
                placeholder={"What are you looking for?"}
                InputProps={{
                  className: classes.textFieldInputProps,
                  endAdornment:
                    <InputAdornment position="start" onClick={() => { setShowSearchInput(false); setSearchValue('') }}>
                      <img src="./todo-page/Search.png" alt="logo" width={"24.32px"} height={'24.33px'} />
                    </InputAdornment>,
                }}
                className={classes.textField}
                value={serachValue}
                // variant={"standard"}
                size={"small"}
                onChange={(event) => setSearchValue(event.target.value)}
              >
              </TextField>
            </div>
            : <div
              style={{ margin: '21.84px 38.46px 0px 0px', }}
              onClick={() => setShowSearchInput(true)}
            >
              <img src="./todo-page/Search.png" alt="logo" width={"24.32px"} height={'24.33px'} />
            </div>
          }
          <CutomizedTooltip
            title={
              <span style={{ width: '85px', height: '39px', padding: '9px 9px 12px 13px', fontSize: '16px', fontWeight: '200' }}>{"Add Item"}</span>
            }
            placement="bottom-start">
            <div
              style={{
                width: '24px', height: '24px', margin: '22px 31px 0px 0px',
                backgroundImage: "url('./todo-page/Circle.png')"
              }}
              onClick={() => addItem()}
            >
              <img src="./todo-page/Add.svg" alt="logo" width={"12px"} height={'12px'} style={{ margin: '6px' }} />
            </div>
          </CutomizedTooltip>

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