import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import PanelAdmin from './pages/PanelAdmin';


const App = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={PanelAdmin} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}


export default App;
