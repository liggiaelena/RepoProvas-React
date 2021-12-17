import { useEffect, useState } from "react";
import { getAllSemesters } from "../../service/service";
import { Body } from "../../styles/page";
import AllSubjects from "./AllSubjects";

import styled from "styled-components";

export default function AllSemesters() {
    const [semesters, setSemesters] = useState([]);

    useEffect(()=>{
        const promise = getAllSemesters()
        promise.then((res)=>{
            console.log(res.data)
            setSemesters(res.data);
        })
    },[])
    return(
        <Body>
        {semesters.map((semester)=>
            <>
                <p key={semester.id}>Semestre {semester.name}</p>
                <AllSubjects key={semester.name} semesterId={semester.id}/>
            </>
        )}
        </Body>
    );
}