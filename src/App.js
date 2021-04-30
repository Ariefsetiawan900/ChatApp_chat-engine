import React from "react";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed, LoginForm } from "./Components";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROID}
      userName={process.env.REACT_APP_USERNAME}
      userSecret={process.env.REACT_APP_USERSECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
