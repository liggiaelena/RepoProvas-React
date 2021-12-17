import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExamById } from "../../service/service";

export default function Exam() {
    const [exam, setExam] = useState({})
    const { id } = useParams();

    useEffect(()=>{
        const promise = getExamById(id);
        promise.then((res)=>{
            console.log(res.data)
            setExam(res.data)
        })
    },[])

    return(
        <>
        <p>{exam.name}</p>
        <p>{exam.link}</p>
        <p>{exam.teacher.name}</p>
        <p>{exam.subject.name}</p>
        </>
    );
}