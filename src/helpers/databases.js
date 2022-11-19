

const getClases = () => {
    const clases =[
        {name: "Matemáticas I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 1}, 
        {name: "Matemáticas I",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein", id: 2}, 
        {name: "Matemáticas III",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein",  id: 3}, 
        {name: "Matemáticas III",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 4}, 
        {name: "Física I",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein" , id: 5}, 
        {name: "Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein",  id: 6}, 
        {name: "Temas Selecto de Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 7}, 
    ]
    return clases
}
const getAlumnos = () => {
    const clase = {
        materia: "Matematicas I",
        grupo: "4B",
        semestre: "2",
        year: "2022",
        alumnos: [
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Vargas Chávez",
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Vargas Chávez",
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Vargas Chávez",
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Vargas Chávez",
        "Alyabra Alejandro Vargas Chávez",
        "Alyabra Vargas Chávez",
    
    ]};
    return clase
}

export { getAlumnos, getClases }