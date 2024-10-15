import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
  );
}

export default App;
