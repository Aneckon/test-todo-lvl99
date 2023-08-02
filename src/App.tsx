import { ToastContainer } from 'react-toastify';
import { Header, List } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <List />
      <ToastContainer />
    </div>
  );
};
