import { Body, Title } from "../../styles/page";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../service/service";
import { useParams } from "react-router-dom";
import Category from "./Category";
import styled from "styled-components";

export default function Categories(props) {
    const [categories, setCategories] = useState([])
    const { id, searchBy } = useParams();

    useEffect(()=>{
        const promiseSemester = getAllCategories()
        promiseSemester.then((res)=>{
            console.log(res.data)
            setCategories(res.data);
        })
    },[]);

    return(
        <Body>
            <Title>Escolha a Prova:</Title>
            <CategoriesContainer>
                {categories.map((category)=>
                <> 
                    <h2>{category.name}:</h2>
                    <CategoryBox>
                        <Category key={category.id} searchById={id} searchBy={searchBy} categoryId={category.id} />
                    </CategoryBox>
                    
                </>)}
            </CategoriesContainer>
            
        </Body>
    );
}

const CategoriesContainer = styled.div`
    width: 90%;
    margin-top: 30px;
    h2{
        font-size: 19px;
        margin-left: 10px;
    }

`
const CategoryBox = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 19px;
    margin-top: 5px;
    padding-left: 15px;
    border-radius: 5px;
    margin-bottom: 20px;

`
