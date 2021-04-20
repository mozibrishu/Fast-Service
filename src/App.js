import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Navbar from './components/Shared/Navbar/Navbar';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddService from './components/Dashboard/AddService/AddService';
import ManageOrderedServices from './components/Dashboard/ManageOrderedServices/ManageOrderedServices';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import AddReview from './components/Dashboard/AddReview/AddReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/ManageOrderServices">
            <ManageOrderedServices></ManageOrderedServices>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
