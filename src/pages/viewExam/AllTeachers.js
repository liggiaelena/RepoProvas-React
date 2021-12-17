import { useEffect, useState } from "react";
import { getAllTeachers } from "../../service/service";
import { useNavigate } from "react-router";
import { Body } from "../../styles/page";

import styled from "styled-components";

export default function AllTeachers(props) {
    const [teachers, setTeachers] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        const promise = getAllTeachers()
        promise.then((res)=>{
            console.log(res.data)
            setTeachers(res.data);
        })
    },[])
    return(
        <Body>
        {teachers.map((teacher)=><p key={teacher.id} onClick={()=> navigate(`/teachers/${teacher.id}`)}>{teacher.name} ({teacher.exams.length} provas)</p>)}
        </Body>
    );
}