function getLocalStorage() {
    const clases = JSON.parse(localStorage.getItem("clases"))
    return clases
}

function saveLocalStorage(clase) {
    const clases = JSON.parse(localStorage.getItem("clases"))
    const clasesActualizadas = [...clases, clase] 
    const dataInString = JSON.stringify(clasesActualizadas)
    localStorage.setItem("clases", dataInString)
}

// Recibe el nuevo estudiante y el id de la clase y lo guarda en local storage creadno un id para el estudiante
function saveNewStudentLocalStorage(newAlumnoSave, idClase) {
    const nombreCompleto = `${newAlumnoSave.name} ${newAlumnoSave.apeido}`
    let id
    const clases = JSON.parse(localStorage.getItem("clases"))
    const index = clases.findIndex(clase => clase.id == idClase)
    const { alumnos } = clases[index]
    // console.log("alumnos",idClase, alumnos)
    if(alumnos.length>0) {
        id = alumnos[alumnos.length-1].id+1
        // console.log("el id",alumnos[alumnos.length-1].id)
      } else {
        id = 1
      }
    // console.log(id)

    const newAlumno= {name: nombreCompleto, id: id}
    // const index = clases.findIndex(clase => clase.id == idClase)
    // console.log("index", index)
    clases[index].alumnos.push(newAlumno)
    const dataInString = JSON.stringify(clases)
    localStorage.setItem("clases", dataInString)
}

// Recibe la clase actualizada y el id de la clase para guardarlo en localStorage
function deleteStudent(claseUpdate, idClase) {
    // Arregla id con un findIndex

    // console.log("claseEliminarStudet",claseUpdate)
    const clases = JSON.parse(localStorage.getItem("clases"))
    const index = clases.findIndex(clase => clase.id == idClase)
    // console.log("index", index, idClase )
    // console.log("eliminar", idClase-1,  clases[idClase-1].alumnos)
    clases[index].alumnos=claseUpdate.alumnos
    // console.log("despues eliminar", idClase-1,  clases[idClase-1].alumnos)
    const dataInString = JSON.stringify(clases)
    localStorage.setItem("clases", dataInString)
}

function deleteClase(idClase) {
    const clases = JSON.parse(localStorage.getItem("clases"))
    const clasesActualizadas = [clases[1]]
    const dataInString = JSON.stringify(clasesActualizadas)
    localStorage.setItem("clases", dataInString)
}

function creaFakeData() {
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
        const dataInString = JSON.stringify(clases)
        localStorage.setItem("clases", dataInString)
}
export {getLocalStorage, saveLocalStorage, saveNewStudentLocalStorage, deleteStudent, deleteClase, creaFakeData}