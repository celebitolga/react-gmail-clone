import React from "react";
import "./SendMail.scss";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { closeSendMessage } from "./../../features/mailSlice";
import { db } from "../../firebase";
import firebase from 'firebase';

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const handleClick = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className="SendMail">
      <div className="SendMail-header">
        <h3>New Message</h3>
        <CloseIcon
          className="SendMail-header-closeIcon"
          onClick={handleClick}
        />
      </div>

      <form className="SendMail-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          ref={register({
            required: true,
            pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
          })}
          placeholder="To"
          type="text"
          style={{ borderColor: errors.to && "red" }}
        />
        <input
          name="subject"
          ref={register({ required: true })}
          placeholder="Subject"
          type="text"
          style={{ borderColor: errors.subject && "red" }}
        />
        <textarea
          name="message"
          ref={register({ required: true })}
          placeholder="Message"
          type="text"
          className="SendMail-form-message"
          style={{ borderColor: errors.message && "red" }}
        ></textarea>

        <div className="SendMail-form-options">
          <Button
            className="SendMail-form-options-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
