import React from 'react';
import './Header.scss';

import { IconButton, Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { logoutAsyn, selectUser } from "../../features/userSlice";
import { useDispatch } from 'react-redux';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function handleClick() {
    history.push('/');
  }

  function singOut() {
    dispatch(logoutAsyn());
  }

  return (
    <div className="Header">
      <div className="Header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          onClick={handleClick}
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="gmail"
        />
      </div>
      <div className="Header-middle">
        <SearchIcon className="Header-middle-searchIcon" />
        <input
          type="text"
          placeholder="Search mail"
          className="Header-middle-input"
        />
        <ArrowDropDownIcon className="Header-middle-dropDownIcon" />
      </div>
      <div className="Header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={singOut}
          className="Header-right-avatar"
        />
      </div>
    </div>
  );
}

export default Header
