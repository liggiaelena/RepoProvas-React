import { Body, Title } from "../../styles/page";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAllCategories, getAllSubjects, getAllTeachersBySubjectId, postExam } from "../../service/service";
import { useNavigate } from "react-router-dom";

export default function InsertExam() {
    const [year, setYear] = useState("");
    const [link, setLink] = useState("");
    const [category, setCategory] = useState({id:'', name:''});
    const [teacher, setTeacher] = useState({id:'', name:''});
    const [subject, setSubject] = useState({id:'', name:'', semesterId: ''});
    const [categories, setCategories] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [displayCategory, setDisplayCategory] = useState(false);
    const [displayTeacher, setDisplayTeacher] = useState(false);
    const [displaySubject, setDisplaySubject] = useState(false);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    useEffect(()=>{
        const categoriesPromise = getAllCategories();
        categoriesPromise.then((res)=>{
            setCategories(res.data)
        })
        const subjectsPromise = getAllSubjects();
        subjectsPromise.then((res)=>{
            setSubjects(res.data)
        })
    },[])

    function teachersRender(s){
        setSubject({id: s.id, name: s.name, semesterId: s.semester.id});
        const teachersPromise = getAllTeachersBySubjectId(s.id);
        teachersPromise.then((res)=>{
            console.log(res.data)
            setTeachers(res.data)
            setError("")
        })
        teachersPromise.catch((err)=>{
            setError(err.response.data)
            setLoading(false)
            setTeachers([])
        })
    }

    function insertExam(){
        setLoading(true)
        const exam = {
            year,
            link,
            semester: `${subject.semesterId}`,
            categoryId: category.id,
            teacherId: teacher.id,
            subjectId: subject.id
        }
        const promise = postExam(exam)
        promise.then((res)=>{
            alert("a sua prova foi inserida com sucesso");
            navigate("/")
        })
        promise.catch((err)=>{
            setError(err.response.data)
            setLoading(false)
        })
    }

    return(
        <Body>
            <Title>Insira sua Prova</Title>
            <InfoContainer>
                <input placeholder="link" 
                        value={link} 
                        onChange={ e => setLink(e.target.value)} 
                        disabled={loading}
                />
                <input placeholder="year - exemplo:2020" 
                        value={year} 
                        onChange={ e => setYear(e.target.value)} 
                        disabled={loading}
                />

                <h2 onClick={()=> setDisplayCategory(!displayCategory)}>Escolha o tipo de prova: {category.name || '↴'}</h2>
                <ChooseContainer display={displayCategory}>
                    {categories.map((c)=> 
                        <Choose key={c.id} onClick={()=> setCategory({id: c.id, name: c.name})}>
                            {c.name}
                        </Choose>)}
                </ChooseContainer>

                <h2 onClick={()=> setDisplaySubject(!displaySubject)}>Escolha a materia: {subject.name || '↴'}</h2>
                <ChooseContainer display={displaySubject}>
                    {subjects.map((s)=> 
                        <Choose key={s.id} onClick={()=> teachersRender(s)}>
                            {s.name} (semestre:{s.semester.name})
                        </Choose>)}
                </ChooseContainer>

                <h2 onClick={()=> setDisplayTeacher(!displayTeacher)}>Escolha o professor: {teacher.name || '↴'}</h2>
                <ChooseContainer display={displayTeacher}>
                    {teachers.map((t)=> 
                        <Choose key={t.teacherId} onClick={()=> setTeacher({id: t.teacherId.id, name: t.teacherId.name})}>
                            {t.teacherId.name}
                        </Choose>)}
                </ChooseContainer>
            </InfoContainer>
            
            {error}
            <Button onClick={insertExam}>Pronto</Button>
        </Body>
    );
}

const ChooseContainer =styled.div`
    display: ${(props)=> props.display? "flex": "none"};
    flex-direction: column;
    align-items: flex-end;
    width: 80%;
    max-height: 150px;
    overflow-y: scroll;
    background-color: aqua;
`
const Choose = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
    min-height: 30px;
    background-color: #d3c2ea;
    color: black;
    font-size: 17px;
    font-weight: 500;
    padding-left: 10px;
`
const InfoContainer = styled.div`
    margin-top: 20px;
    input{
        width: 90%;
        height: 35px;
        border-radius: 5px;
        background-color: #e1daea;
        margin-bottom: 10px;
        font-size: 18px;
    }

    input::placeholder{
        color: #666161;
        padding-left: 15px;
        font-weight: 700;
        font-size: 18px;
    }

    h2{
        margin-top: 15px;
        margin-bottom: 5px;
        font-size: 19px;
    }
    h2:hover{
        cursor: pointer;
    }
`
const Button = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    border-radius: 5px;
    background-color: #a790f9;
    cursor: pointer;

`