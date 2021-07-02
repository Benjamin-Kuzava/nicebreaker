import { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const BrowseLevels = lazy(() => import("./pages/BrowseLevels"));
const CreateLevel = lazy(() => import("./pages/CreateLevel"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>... Loading</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/browse" component={BrowseLevels} />
          <Route exact path="/create" component={CreateLevel} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
