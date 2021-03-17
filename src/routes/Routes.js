import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Game from '../pages/Game';
import Online from '../pages/Online';

//The routing is done to the different pages
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>       {/* Principal page */}
        <Route exact path="/menu" component={Menu}/>    {/* //Route to the menu */}
        <Route exact path="/game" component={Game}/>    {/* //Route to the game screen, where matrix will be displayed */}
        <Route exact path="/online" component={Online}/>{/* //Route to the Online game screen, where opponents are displayed  */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
