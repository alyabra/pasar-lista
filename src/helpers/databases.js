

const getClases = () => {
    const clases =[
        {name: "Matemáticas I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 1, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Matemáticas I",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein", id: 2, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Matemáticas III",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein",  id: 3, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Matemáticas III",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 4, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Física I",  grup: "4A", semester: "2", year: "2022", school: "Edith Stein" , id: 5, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein",  id: 6, 
        alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
        {name: "Temas Selecto de Física I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 7, alumnos: [
            {name: "Alyabra Alejandro Vargas Chávez", id: 1},
            {name: "Alyabra Alejandro Vargas Chávez", id: 2},
            {name: "Alyabra Alejandro Vargas Chávez", id: 3},
            {name: "Alyabra Alejandro Vargas Chávez", id: 4},
            {name: "Alyabra Alejandro Vargas Chávez", id: 5},
            {name: "Alyabra Alejandro Vargas Chávez", id: 6},
            {name: "Alyabra Alejandro Vargas Chávez", id: 7},
            {name: "Alyabra Alejandro Vargas Chávez", id: 8},
            {name: "Alyabra Alejandro Vargas Chávez", id: 9},
            {name: "Alyabra Alejandro Vargas Chávez", id: 10},
        ]}, 
    ]
    return clases
    
}
const getAlumnos = (id) => {
    if(id === '1') {
    const clase = {
        materia: "Matematicas I",
        grupo: "4B",
        semestre: "2",
        year: "2022",
        alumnos: [
        {name: "Alyabra Alejandro Vargas Chávez", id: 1},
        {name: "Alyabra Alejandro Vargas Chávez", id: 2},
        {name: "Alyabra Alejandro Vargas Chávez", id: 3},
        {name: "Alyabra Alejandro Vargas Chávez", id: 4},
        {name: "Alyabra Alejandro Vargas Chávez", id: 5},
        {name: "Alyabra Alejandro Vargas Chávez", id: 6},
        {name: "Alyabra Alejandro Vargas Chávez", id: 7},
        {name: "Alyabra Alejandro Vargas Chávez", id: 8},
        {name: "Alyabra Alejandro Vargas Chávez", id: 9},
        {name: "Alyabra Alejandro Vargas Chávez", id: 10},
    ]};
    return clase
    }
    if(id === '2') {
        const clase = {
            materia: "Matematicas II",
            grupo: "4B",
            semestre: "2",
            year: "2022",
            alumnos: [
            {name: "Alejandro Vargas Chávez", id: 1},
            {name: "Alejandro Vargas Chávez", id: 2},
            {name: "Alejandro Vargas Chávez", id: 3},
            {name: "Alejandro Vargas Chávez", id: 4},
            {name: "Alejandro Vargas Chávez", id: 5},
            {name: "Alejandro Vargas Chávez", id: 6},
            {name: "Alejandro Vargas Chávez", id: 7},
            {name: "Alejandro Vargas Chávez", id: 8},
            {name: "Alejandro Vargas Chávez", id: 9},
            {name: "Alejandro Vargas Chávez", id: 10},
        ]};
        return clase
        }
        if(id === '3') {
            const clase = {
                materia: "Matematicas III",
                grupo: "4B",
                semestre: "2",
                year: "2022",
                alumnos: [
                {name: "Alejandro Vargas Chávez", id: 1},
                {name: "Alejandro Vargas Chávez", id: 2},
                {name: "Alejandro Vargas Chávez", id: 3},
                {name: "Alejandro Vargas Chávez", id: 4},
                {name: "Alejandro Vargas Chávez", id: 5},
                {name: "Alejandro Vargas Chávez", id: 6},
                {name: "Alejandro Vargas Chávez", id: 7},
                {name: "Alejandro Vargas Chávez", id: 8},
                {name: "Alejandro Vargas Chávez", id: 9},
                {name: "Alejandro Vargas Chávez", id: 10},
            ]};
            return clase
            }
            if(id === '4') {
                const clase = {
                    materia: "Matematicas II",
                    grupo: "4B",
                    semestre: "2",
                    year: "2022",
                    alumnos: [
                    {name: "Alejandro Vargas Chávez", id: 1},
                    {name: "Alejandro Vargas Chávez", id: 2},
                    {name: "Alejandro Vargas Chávez", id: 3},
                    {name: "Alejandro Vargas Chávez", id: 4},
                    {name: "Alejandro Vargas Chávez", id: 5},
                    {name: "Alejandro Vargas Chávez", id: 6},
                    {name: "Alejandro Vargas Chávez", id: 7},
                    {name: "Alejandro Vargas Chávez", id: 8},
                    {name: "Alejandro Vargas Chávez", id: 9},
                    {name: "Alejandro Vargas Chávez", id: 10},
                ]};
                return clase
            }
            if(id === '5') {
                const clase = {
                    materia: "Matematicas V",
                    grupo: "4B",
                    semestre: "2",
                    year: "2022",
                    alumnos: [
                    {name: "Alejandro Vargas Chávez", id: 1},
                    {name: "Alejandro Vargas Chávez", id: 2},
                    {name: "Alejandro Vargas Chávez", id: 3},
                    {name: "Alejandro Vargas Chávez", id: 4},
                    {name: "Alejandro Vargas Chávez", id: 5},
                    {name: "Alejandro Vargas Chávez", id: 6},
                    {name: "Alejandro Vargas Chávez", id: 7},
                    {name: "Alejandro Vargas Chávez", id: 8},
                    {name: "Alejandro Vargas Chávez", id: 9},
                    {name: "Alejandro Vargas Chávez", id: 10},
                ]};
                return clase
            }
            if(id === '6') {
                const clase = {
                    materia: "Matematicas VI",
                    grupo: "4B",
                    semestre: "2",
                    year: "2022",
                    alumnos: [
                    {name: "Alejandro Vargas Chávez", id: 1},
                    {name: "Alejandro Vargas Chávez", id: 2},
                    {name: "Alejandro Vargas Chávez", id: 3},
                    {name: "Alejandro Vargas Chávez", id: 4},
                    {name: "Alejandro Vargas Chávez", id: 5},
                    {name: "Alejandro Vargas Chávez", id: 6},
                    {name: "Alejandro Vargas Chávez", id: 7},
                    {name: "Alejandro Vargas Chávez", id: 8},
                    {name: "Alejandro Vargas Chávez", id: 9},
                    {name: "Alejandro Vargas Chávez", id: 10},
                ]};
                return clase
            }
            if(id === '7') {
                const clase = {
                    materia: "Matematicas VII",
                    grupo: "4B",
                    semestre: "2",
                    year: "2022",
                    alumnos: [
                    {name: "Alejandro Vargas Chávez", id: 1},
                    {name: "Alejandro Vargas Chávez", id: 2},
                    {name: "Alejandro Vargas Chávez", id: 3},
                    {name: "Alejandro Vargas Chávez", id: 4},
                    {name: "Alejandro Vargas Chávez", id: 5},
                    {name: "Alejandro Vargas Chávez", id: 6},
                    {name: "Alejandro Vargas Chávez", id: 7},
                    {name: "Alejandro Vargas Chávez", id: 8},
                    {name: "Alejandro Vargas Chávez", id: 9},
                    {name: "Alejandro Vargas Chávez", id: 10},
                ]};
                return clase
                }
                    const clase = {
                        materia: "Matematicas VIII",
                        grupo: "4B",
                        semestre: "2",
                        year: "2022",
                        alumnos: [
                        {name: "Alejandro Vargas Chávez", id: 1},
                        {name: "Alejandro Vargas Chávez", id: 2},
                        {name: "Alejandro Vargas Chávez", id: 3},
                        {name: "Alejandro Vargas Chávez", id: 4},
                        {name: "Alejandro Vargas Chávez", id: 5},
                        {name: "Alejandro Vargas Chávez", id: 6},
                        {name: "Alejandro Vargas Chávez", id: 7},
                        {name: "Alejandro Vargas Chávez", id: 8},
                        {name: "Alejandro Vargas Chávez", id: 9},
                        {name: "Alejandro Vargas Chávez", id: 10},
                    ]};
                    return clase
        
}

const getDate = () => {
    const day = new Date()
    const dateString = day.toLocaleDateString()
    return dateString
}

export { getAlumnos, getClases, getDate }