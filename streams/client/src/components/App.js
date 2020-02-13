import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>  {/* A history object to use for navigation */}
                <div>
                    <Header />
                    {/* <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.
                        If we are going to render /streams/new, it starts looking for a matchiing. <Route path="/streams/new"> will match and <Switch> will stop looking for matches and render that <Route>.
                        Similarly, if we are at /0, then <Route path="/streams/:id"> will render
                     */}
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App; 