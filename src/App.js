import "./App.css";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetails from "./PostDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Post />
        </Route>
        <Route path='/postDetails/:id'>
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
