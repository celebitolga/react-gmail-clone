import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import "./EmailRow.scss";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";


import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {

  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick(e) {
    if (!(e.target.className === "PrivateSwitchBase-input-4")) {
      dispatch(selectMail({ id, title, subject, description, time }));
      history.push('/mail');
    }
  }

  return (
    <div onClick={handleClick} className="EmailRow">
      <div className="EmailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="EmailRow-title">{title}</h3>

      <div className="EmailRow-message">
        <h4>
          {subject}{" "}
          <span className="EmailRow-message-description">- {description}</span>
        </h4>
      </div>

      <p className="EmailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
