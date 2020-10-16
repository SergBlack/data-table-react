import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={'/'} exact component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
