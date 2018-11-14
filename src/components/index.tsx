import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "../store";
import MoodList from './MoodList'
import MoodNew from './MoodNew'

const NotFound = () => <h1>404 Not found</h1>

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={MoodList} />
        <Route exact={true} path="/record" component={MoodNew} />
        <Route exact={true} path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
