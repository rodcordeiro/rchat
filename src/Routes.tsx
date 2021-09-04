import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Pages/Main';
import Chat from './Pages/Chat';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path='/chat' component={Chat}/>
            </Switch>
        </BrowserRouter>
    )
}