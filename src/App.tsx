import { BrowserRouter } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PageNavigator from './PageNavigator';

function App() {
  return (
    <BrowserRouter basename="pokemon">
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;
