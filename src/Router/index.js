import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Transcation from '../Components/Transcation'; // Update the file name if necessary
import Piechart from '../Components/pie';

function RouterDOM() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Transcation} />
        
      </Switch>
    </Router>
  );
}

export default RouterDOM;
