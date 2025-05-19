import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

  //STATE MANAGEMENT: how do we change?
  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  const currentUrl = window.location.pathname;
  console.log('current url ', currentUrl);
  let mainContent = null;

  if (currentUrl == "/") {
    mainContent = <Static.WelcomePage />
  } else if (currentUrl == "/about") {
    mainContent = <Static.AboutPage />
  } else if (currentUrl == "/chat") {
    mainContent = <ChatPage
      currentUser={currentUser}
      messageArray={messageStateArray}
      addMessageFunction={addMessage}
    />
  } else if (currentUrl == "/signin") {
    mainContent = <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />
  } else {
    mainContent = <Static.ErrorPage />
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />
      {mainContent}
    </div>
  );
}

export default App;