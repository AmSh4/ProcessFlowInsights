import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UploadForm from './components/UploadForm';
import ProcessGraph from './components/ProcessGraph';
import AuthForm from './components/AuthForm';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={AuthForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/upload" component={UploadForm} />
          <Route path="/graph" component={ProcessGraph} />
          <Route path="/" component={AuthForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;