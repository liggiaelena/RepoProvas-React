import { useEffect, useState } from "react";
import { getAllTeachers } from "../../service/service";
import { useNavigate } from "react-router";
import { Body, Title } from "../../styles/page";
import styled from "styled-components";

export default function AllTeachers(props) {
    const [teachers, setTeachers] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        const promise = getAllTeachers()
        promise.then((res)=>{
            setTeachers(res.data);
        })
    },[])
    return(
        <Body>
            <Title>Escolha um professor:</Title>
        {teachers.map((teacher)=>
            <Teacher key={teacher.id} onClick={()=> navigate(`/categories/teacher/${teacher.id}`)}>
                {teacher.name} ({teacher.exams.length} provas)
            </Teacher>)}
        </Body>
    );
}

const Teacher = styled.div`
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