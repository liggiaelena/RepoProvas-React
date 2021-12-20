import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getExamById } from "../../service/service";
import { Body, Title } from "../../styles/page";

export default function Exam() {
    const [exam, setExam] = useState(false)
    const { id } = useParams();

    useEffect(()=>{
        const promise = getExamById(id);
        promise.then((res)=>{
            console.log(res.data)
            setExam(res.data)
        })
    },[id])
console.log(exam)
    return(
        <Body>
            <Title>Prova {exam.name}</Title>
            {exam?
            <ExamBox>
                <p>Link: {exam.link}</p>
                <p>Professor: {exam.teacher.name}</p>
                <p>Matéria: {exam.subject.name}</p>
            </ExamBox>
            : ''}
        </Body>
    );
}

const ExamBox = styled.div`
    width: 80%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 10px;

    p{
        margin-top: 10px;
    }

`