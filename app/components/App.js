var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route path='/popular' component={Popular} />
                        <Route render={function () {
                            return <p>Not found </p>
                        }} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = App;

// The Switch component ensures only one specific route is rendered.
// The final Route component doesn't have a path, so that if none of the valid
// paths are selected, the "Not found" text will render. Kind of like the default
// case on a JS switch statement.