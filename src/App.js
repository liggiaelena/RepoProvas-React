import './styles/reset.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserContext from './context/UserContext';

export default function App() {

  return (
  <UserContext.Provider>
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />} />
      </Routes>
    </Router>
  </UserContext.Provider>
  );
}