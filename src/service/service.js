import axios from 'axios';

const URL = 'http://localhost:4000'

function getExamById(id){
    const promise = axios.get(`${URL}/exams/${id}`);
    return promise;
}

function getAllTeachers(){
    const promise = axios.get(`${URL}/list/teachers`);
    return promise;
}

function getAllCategories(){
    const promise = axios.get(`${URL}/list/categories`);
    return promise;
}

function getAllSemesters(){
    const promise = axios.get(`${URL}/list/semesters`);
    return promise;
}

function getAllExamsBySearchByIdAndCategoryId(searchBy, searchById, categoryId){
    const promise = axios.get(`${URL}/exams/${searchBy}/${searchById}/category/${categoryId}`);
    return promise;
}

function getAllSubjectsBySemesterId(semesterId){
    const promise = axios.get(`${URL}/list/subjects/${semesterId}`);
    return promise;
}

export {
    getAllTeachers,
    getAllExamsBySearchByIdAndCategoryId,
    getAllSemesters,
    getAllCategories,
    getExamById,
    getAllSubjectsBySemesterId,
}