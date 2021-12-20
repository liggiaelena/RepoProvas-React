import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
        <ExamBox>
        {exams.map((exam)=> <Exam onClick={()=> navigate(`/exam/${exam.id}`)}>
                               {exam.name} - {subject? exam.teacher.name : exam.subject.name}
                            </Exam>)}
        </ExamBox>
    );
}

const ExamBox = styled.div`
    width: 100%;
    height: auto;
`

const Exam = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px;
    height: 40px;
    background-color: #e1daea;
    margin: 5px 0px;
    padding-left: 10px;

`