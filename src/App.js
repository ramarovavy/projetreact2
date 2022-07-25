import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homes from './pages/Homes';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import contact from './pages/contact';
import  PortFolio from './pages/PortFolio';


const App = () => {
  return (
            <>
            <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Homes} />
              <Route path="/competence" component={Knowledges} />
              <Route path="/PortFolio" component={PortFolio} /> 
              <Route path="/contact" component={contact} />
              <Route component={NotFound} />
            </Switch>
            </BrowserRouter>
                </>
    
  );
};

export default App;