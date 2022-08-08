import {  HashRouter, HashRouter as Router, Route } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PageNavigator from './PageNavigator';

function App() {
  return (
    <HashRouter>
      <PageHeader />
      <PageNavigator />
    </HashRouter>
  );
}

export default App;
