import {  HashRouter, HashRouter as Router, Route } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PageNavigator from './PageNavigator';

function App() {
  return (
    <div>
      <PageHeader />
      <PageNavigator />
    </div>
  );
}

export default App;
