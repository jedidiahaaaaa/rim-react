import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Feed from './components/feed/Feed'
import PostDetails from './components/feed/PostDetails'
import SignIn from './components/auth/SignIn'
import CreatePost from './components/feed/CreatePost'

// Last video
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path='/feed' component={Feed}/>
              <Route path='/post/:id' component={PostDetails}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/create' component={CreatePost}/>

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
