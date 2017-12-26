
import {
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import c from './components';

import { Provider } from 'mobx-react';
import stores from './stores';

render((<Provider contacts={stores.contacts}><Router>
    <div>
        <Redirect from='/' to='/contacts'/>
        <Route path='contacts' component={c.Layout}/>
        <Route exact path='/contacts' component={c.Collection}/>
        <Route path='/contacts/:contactId' component={c.Show}/>
    </div>
</Router></Provider>), document.getElementById('app'));
