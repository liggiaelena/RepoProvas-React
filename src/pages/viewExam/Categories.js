import { Body } from "../../styles/page";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../service/service";
import { useParams } from "react-router-dom";
import Category from "./Category";

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
            <p>oi</p>
            {categories.map((category)=>
                <> 
                    <p>{category.name}</p>
                    <Category key={category.id} searchById={id} searchBy={searchBy} categoryId={category.id} />
                </>)}
        </Body>
    );
}