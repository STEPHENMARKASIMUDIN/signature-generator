import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'


class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Switch>
              <Route exact path="/"
                render={
                  props => (
                    <Home {...props} />
                  )
                }
              />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
