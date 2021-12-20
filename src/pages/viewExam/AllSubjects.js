import { useEffect, useState } from "react";
import { getAllSubjectsBySemesterId } from "../../service/service";
import { useNavigate } from "react-router";

import styled from "styled-components";

export default function AllSubjects({ semesterId }) {
    const [subjects, setSubjects] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        const promise = getAllSubjectsBySemesterId(semesterId)
        promise.then((res)=>{
            setSubjects(res.data);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div key={semesterId}>
        {subjects.map((subject)=>
            <Subjects key={subject.exams.id} onClick={()=> navigate(`/categories/subject/${subject.id}`)}>
                {subject.name} ({subject.exams.length} provas)
            </Subjects>)}
        </div>
    );
}

const Subjects = styled.div`
    background-color: #e1daea;
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 19px;
    margin-top: 10px;
    padding-left: 15px;
    border-radius: 5px;
    cursor: pointer;

`