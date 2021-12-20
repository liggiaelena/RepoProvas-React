import { useEffect, useState } from "react";
import { getAllSubjectsBySemesterId } from "../../service/service";
import { useNavigate } from "react-router";
import { Body } from "../../styles/page";

import styled from "styled-components";

export default function AllSubjects({ semesterId }) {
    const [subjects, setSubjects] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        const promise = getAllSubjectsBySemesterId(semesterId)
        promise.then((res)=>{
            console.log(res.data)
            setSubjects(res.data);
        })
    },[])
    return(
        <>
        {subjects.map((subject)=>
            <Subjects key={subject.id} onClick={()=> navigate(`/categories/subject/${subject.id}`)}>
                {subject.name} ({subject.exams.length} provas)
            </Subjects>)}
        </>
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