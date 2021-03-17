import React from "react";
import "./Mail.scss";

import { useHistory } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useSelector } from 'react-redux';
import { selectedMail } from "../../features/mailSlice";

function Mail() {
  let history = useHistory();
  const selectMail = useSelector(selectedMail);

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="Mail">
      <div className="Mail-tools">
        <div className="Mail-tools-left">
          <IconButton onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="Mail-tools-right">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="Mail-body">
        <div className="Mail-body-header">
          <h2>{selectMail?.subject}</h2>
          <LabelImportantIcon className="Mail-body-header-importantIcon" />
          <p>{selectMail?.title}</p>
          <p className="Mail-body-header-time">{selectMail?.time}</p>
        </div>
        <div className="Mail-body-message">
          <p>{selectMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
