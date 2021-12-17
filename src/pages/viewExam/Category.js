import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExamsByTeacherIdAndCategoryId } from "../../service/service";


export default function Category({ teacherId, categoryId}) {
    const [exams, setExams] = useState([]);
    let navigate = useNavigate();

    
    useEffect(() => {
        const promiseExams = getAllExamsByTeacherIdAndCategoryId(teacherId, categoryId)
        promiseExams.then((res)=>{
            console.log(res.data)
            setExams(res.data);
            })
    },[]);

    return(
        <>
        {exams.map((exam)=> <p onClick={()=> navigate(`/exam/${exam.id}`)}>{exam.name} - {exam.subject.name}</p>)}
        </>
    );
}