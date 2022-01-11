import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Form } from "./components/Form/Form";
import { RecipeDetail } from "./components/RecipeDetail/RecipeDetail";
import ServerError from "./components/404/ServerError";
function App() {
  return (
 <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route exact path="/addRecipe" component={Form} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route exact path="*" component={ServerError} />
      </Switch>
      <div>
      </div>
    </div> 
  );
}

export default App;
