import React from 'react';
import './App.css';
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/Profile/:userID?" render={ () => <ProfileContainer /> } />
          <Route path="/Dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/News" render={ () => <News /> } />
          <Route path="/Users" render={ () => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
