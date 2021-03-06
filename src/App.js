import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route path="/Profile" render={ () => <Profile /> } />
          <Route path="/Dialogs" render={ () => <DialogsContainer /> } />
          <Route path="/News" render={ () => <News /> } />
          <Route path="/Users" render={ () => <UsersContainer /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
