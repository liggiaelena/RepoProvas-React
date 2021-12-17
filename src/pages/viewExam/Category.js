import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExamsBySearchByIdAndCategoryId } from "../../service/service";


export default function Category({ searchById, searchBy, categoryId}) {
    const [exams, setExams] = useState([]);
    let navigate = useNavigate();
    let subject = false;

    if(searchBy === "subject"){
        subject = true;
    }
console.log("oi")
    
    useEffect(() => {
        const promiseExams = getAllExamsBySearchByIdAndCategoryId(searchBy, searchById, categoryId)
        promiseExams.then((res)=>{
            console.log(res.data)
            setExams(res.data);
            })
    },[]);

    return(
        <>
        {exams.map((exam)=> <p onClick={()=> navigate(`/exam/${exam.id}`)}>
                               {exam.name} - {subject? exam.teacher.name : exam.subject.name}
                            </p>)}
        </>
    );
}