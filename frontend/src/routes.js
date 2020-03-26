import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import NewIncident from './pages/NewIncident/NewIncident'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/incidents/new" exact component={NewIncident} />
        </BrowserRouter>
    )
}

export default Routes