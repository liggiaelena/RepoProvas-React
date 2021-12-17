import { Body } from "../../styles/page";
import { useEffect, useState } from "react";
import { getAllCategories, getAllExamsByTeacherIdAndCategoryId } from "../../service/service";
import { useParams } from "react-router-dom";
import Category from "./Category";

export default function Teacher(props) {
    const [categories, setCategories] = useState([])
    const { id } = useParams();

    useEffect(()=>{
        const promiseSemester = getAllCategories()
        promiseSemester.then((res)=>{
            console.log(res.data)
            setCategories(res.data);
        })
    },[]);

    return(
        <Body>
            <p>oi</p>
            {categories.map((category)=>
                <> 
                    <p>{category.name}</p>
                    <Category key={category.id} teacherId={id} categoryId={category.id} />
                </>)}
        </Body>
    );
}