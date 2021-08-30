import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Result from "./components/Results";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search}></Route>
          <Route exact path="/result" component={Result}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
