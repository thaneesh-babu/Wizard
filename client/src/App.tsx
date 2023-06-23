import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartPage from './pages/startPage/StartPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
