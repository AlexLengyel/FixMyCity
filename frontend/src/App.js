//import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import CreateIssue from "./pages/CreateIssue/CreateIssue";
import Map from "./components/Map/Map";
import Banner from "./components/Banner/Banner";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import PageIssueList from "./pages/PageIssueList/pageIssueList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/createissue" component={CreateIssue} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/issuelist" component={PageIssueList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
