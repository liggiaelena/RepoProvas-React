import { useEffect, useState } from "react";
import { getAllSemesters } from "../../service/service";
import { Body, Title } from "../../styles/page";
import AllSubjects from "./AllSubjects";
import styled from "styled-components";

export default function AllSemesters() {
    const [semesters, setSemesters] = useState([]);

    useEffect(()=>{
        const promise = getAllSemesters()
        promise.then((res)=>{
            setSemesters(res.data);
        })
    },[])
    return(
        <Body>
            <Title>Escolha a matéria</Title>
        {semesters.map((semester)=>
            <SubjectsContainer>
                <h2 key={semester.id}>Semestre {semester.name}:</h2>
                <AllSubjects key={semester.name} semesterId={semester.id}/>
            </SubjectsContainer>
        )}
        </Body>
    );
}

const SubjectsContainer = styled.div`
    margin-top: 20px;
    width: 90%;
    h2{
        font-size: 20px;
    }
`