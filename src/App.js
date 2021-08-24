import React from 'react'
import './App.css';
import { HashRouter, Swtich, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Montessori from './screens/OurPhilosophy/Montessori';
import MultipleIntel from './screens/OurPhilosophy/MultipleIntel';
import HigherIntel from './screens/OurPhilosophy/HigherIntel';
import Admission from './screens/Admission';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Admission" component={Admission} />


          <Route path="/OurPhilosophy/Montessori" component={Montessori} />
          <Route path="/OurPhilosophy/MultipleIntel" component={MultipleIntel} />
          <Route path="/OurPhilosophy/HigherIntel" component={HigherIntel} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
