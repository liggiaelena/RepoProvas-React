import './styles/reset.css';
import Home from './pages/Home';
import Teacher from './pages/viewExam/Teacher';
import AllTeachers from './pages/viewExam/AllTeachers';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />} />
        <Route path = "/teachers" exact element = {<AllTeachers />} />
        <Route path = "/teachers/:name" exact element = {<Teacher />} />
      </Routes>
    </Router>
  );
}