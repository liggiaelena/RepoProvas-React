import './styles/reset.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />} />
      </Routes>
    </Router>
  );
}