import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import EmailList from "./components/emailList/EmailList";
import Mail from "./components/mail/Mail";
import SendMail from "./components/sendMail/SendMail";
import Login from "./components/login/Login";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// * Mail state
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectedMail } from "./features/mailSlice";

// * User state
import { login, selectUser } from "./features/userSlice";

// * Router guard
import GuardedRoute from "./GuardedRoute";

// * Loading
import CircularProgress from "@material-ui/core/CircularProgress";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const selectMail = useSelector(selectedMail);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // * User is logged id
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
      setLoading(false);
    });
  }, []);

  function renderApp() {
    return !user ? (
      <Login />
    ) : (
      <div className="App">
        <Header />
        <div className="App-body">
          <Sidebar />

          <Switch>
            <GuardedRoute path="/mail" component={Mail} mailData={selectMail} />
            {/* <Route path="/mail">
              <Mail />
            </Route> */}
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    );
  }

  return <Router>{loading ? <CircularProgress className="Loading"/> : renderApp()}</Router>;
}

export default App;
