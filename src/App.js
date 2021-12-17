import './styles/reset.css';
import Home from './pages/Home';
import Teacher from './pages/viewExam/Teacher';
import AllTeachers from './pages/viewExam/AllTeachers';
import Exam from './pages/viewExam/Exam';
import AllSemesters from './pages/viewExam/AllSemesters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />} />
        <Route path = "/exam/:id" exact element = {<Exam />} />
        <Route path = "/teachers" exact element = {<AllTeachers />} />
        <Route path = "/teachers/:id" exact element = {<Teacher />} />
        <Route path = "/subjects" exact element = {<AllSemesters />} />
      </Routes>
    </Router>
  );
}