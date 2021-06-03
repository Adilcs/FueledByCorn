
import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Header from './components/Header';
import Map from './components/Map';
import AddMarker from './components/AddMarker';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/add" component={AddMarker} />
    </Switch>
    </div>

  );
}

export default App;
