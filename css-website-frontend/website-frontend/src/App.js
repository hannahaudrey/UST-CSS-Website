import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommitteeFrame from './container/committeeFrame';
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path = "/" component={ CommitteeFrame } />
                </Switch>
            </div>
        </Router>
    );
}

export default App;