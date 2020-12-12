import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import PeopleNear from "./components/PeopleNear/PeopleNear/PeopleNear";
import Preference from "./components/Preference/Preference/Preference";
import ProfileVisitors from "./components/ProfileVisitors/ProfileVisitors/ProfileVisitors";
import Personal from "./components/Registration/Personal/Personal";
import Career from "./components/Registration/Career/Career";
import Lifestyle from "./components/Registration/Lifestyle/Lifestyle";
import Advance from "./components/Search/Advance/Advance";
import Basic from "./components/Search/Basic/Basic";
import Settings from "./components/Settings/Settings/Settings";

import UserProfile from "./components/User/UserProfile/UserProfile";
import Dashboard from "./components/UserDashboard/Dashboard/Dashboard";
import MatchProfileList from "./components/UserDashboard/MatchProfileList/MatchProfileList";
import TopMatchesList from "./components/UserDashboard/TopMatchesList/TopMatchesList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, accessToken, setAccessToken]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/search/basic">
            <Basic></Basic>
          </Route>
          <Route path="/search/advance">
            <Advance></Advance>
          </Route>
          <Route path="/personal">
            <Personal></Personal>
          </Route>
          <Route path="/career">
            <Career></Career>
          </Route>
          <Route path="/lifestyle">
            <Lifestyle></Lifestyle>
          </Route>
          <Route path="/visitor">
            <ProfileVisitors></ProfileVisitors>
          </Route>
          <Route path="/nearPeople">
            <PeopleNear></PeopleNear>
          </Route>
          <Route path="/preference">
            <Preference></Preference>
          </Route>
          <Route path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/user">
            <UserProfile></UserProfile>
          </Route>
          <Route path="/user/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/user/profileMatch">
            <MatchProfileList></MatchProfileList>
          </Route>
          <Route path="/user/topMatches">
            <TopMatchesList></TopMatchesList>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
