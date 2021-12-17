import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Body } from "../styles/page";

export default function Home(props) {
    const [display, setDisplay] = useState(false);
    let navigate = useNavigate();

    return(
        <Body>
            <Logo>
                <img src='https://blogexamedeordem.com.br/uploads/2017/05/material-para-a-prova-da-oab.png' alt=''/>
            </Logo>
            <ContainerButtons>
                <Buttom onClick={()=> setDisplay(!display)}>Ver provas</Buttom>
                <ChooseContainer display={display} >
                    <Choose onClick={()=> navigate("/teachers")}>Professores</Choose>
                    <Choose onClick={()=> navigate("/")}>Disciplinas</Choose>
                </ChooseContainer>
                <Buttom onClick={()=> navigate("/")}>Inserir uma prova</Buttom>
            </ContainerButtons>
        </Body>
    );
}


const Logo = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 50px 0px;
   img{
       width: 320px;
   }
`
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;

`

const Buttom = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 23px;
    justify-content: center;
    align-items: center;
    background-color: #8C97EA;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    color: #fff;
    margin-top: 17px;
    margin-bottom: 10px;
`
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
    justify-content: flex-end;
    width: 100%;
    height: 30px;
    min-height: 30px;
    background-color: aliceblue;
    color: black;
    font-size: 17px;
    font-weight: 500;
`