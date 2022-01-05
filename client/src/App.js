import { Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Form } from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/addRecipe" component={Form} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
