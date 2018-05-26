import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';
import Graphics from './component/container/component/graphics'
import App from './component/container/App';
import Donate from './component/container/component/donate'
import Tutorials from './component/container/component/tutorials'
import asyncComponent from './helpers/AsyncFunc';


const PublicRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route
                        path="/graphics"
                        component={Graphics}
                    />
                    <Route
                        path="/donate"
                        component={Donate}
                    />
                    <Route
                        path="/tutorials"
                        component={Tutorials}
                    />

                    <Route
                        path="/*"
                        component={App}
                    />



                </Switch>
            </div>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
