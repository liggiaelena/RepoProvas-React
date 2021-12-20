import './styles/reset.css';
import Home from './pages/Home';
import Categories from './pages/viewExam/Categories';
import AllTeachers from './pages/viewExam/AllTeachers';
import Exam from './pages/viewExam/Exam';
import AllSemesters from './pages/viewExam/AllSemesters';
import InsertExam from './pages/insertExam/InsertExam';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Home />} />
        <Route path = "/exam/:id" exact element = {<Exam />} />
        <Route path = "/teachers" exact element = {<AllTeachers />} />
        <Route path = "/categories/:searchBy/:id" exact element = {<Categories />} />
        <Route path = "/subjects" exact element = {<AllSemesters />} />
        <Route path = "/insert" exact element = {<InsertExam />} />
      </Routes>
    </Router>
  );
}