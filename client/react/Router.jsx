import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import Home from './Pages/Home';

const AppRouter = () => (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
);

export default AppRouter;