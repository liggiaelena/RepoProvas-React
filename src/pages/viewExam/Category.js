import { useEffect, useState } from "react";
import { getAllExamsByTeacherIdAndCategoryId } from "../../service/service";


export default function Category({ teacherId, categoryId}) {
    const [exams, setExams] = useState([])

    
    useEffect(() => {
        const promiseExams = getAllExamsByTeacherIdAndCategoryId(teacherId, categoryId)
        promiseExams.then((res)=>{
            console.log(res.data)
            setExams(res.data);
            })
    },[]);

    return(
        <>
        {exams.map((exam)=> <p>{exam.name} - {exam.subject.name}</p>)}
        </>
    );
}