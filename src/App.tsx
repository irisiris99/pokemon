import { BrowserRouter } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PageNavigator from './PageNavigator';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;
