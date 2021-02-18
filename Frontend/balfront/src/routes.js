import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/main";
import UserDetail from './pages/userDetails';
import UserRegister from './pages/userRegister';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/userDetails/:id" component={UserDetail} />
        </Switch>
    </BrowserRouter>
);

export default Routes;