import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/homePage/homepage.component';

const hatsPage = (props) => {
  console.log(props);
  return (
    <div><h1>hello this is hat page {props.match.params.id}</h1></div>
  );
};

function App() {
  return (
    <div>

      <Route exact path="/" component={HomePage} />
      <Route exact path='/hats/:id' component={hatsPage} />

    </div>
  );
}

export default App;
