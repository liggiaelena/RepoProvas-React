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
        <Body>
        {subjects.map((subject)=>
            <p key={subject.id} onClick={()=> navigate(`/categories/subject/${subject.id}`)}>
                {subject.name} ({subject.exams.length} provas)
            </p>)}
        </Body>
    );
}