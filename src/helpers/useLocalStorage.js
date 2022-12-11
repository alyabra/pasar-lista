function getLocalStorage() {
    const clases = JSON.parse(localStorage.getItem("clases"))
    if(clases) {
        return clases
    } else {
        return []
    }

}

// guardar nueva clase en localSAtorage

function saveLocalStorage(clase) {
    const newClass = {...clase}
    let id

    let clases
    clases = JSON.parse(localStorage.getItem("clases"))

    if(!clases) clases = [] 
    if(clases.length>0) {
        id = clases[clases.length-1].id+1
      } else {
        id = 1
      }
    newClass.id = id
    newClass.alumnos = []
    
    const clasesActualizadas = [...clases, newClass] 
    const dataInString = JSON.stringify(clasesActualizadas)
    localStorage.setItem("clases", dataInString)
}

// Recibe el nuevo estudiante y el id de la clase y lo guarda en local storage creadno un id para el estudiante
function saveNewStudentLocalStorage(newAlumnoSave, idClase) {
    const nombreCompleto = `${newAlumnoSave.name} ${newAlumnoSave.apeido}`
    let id
    const clases = JSON.parse(localStorage.getItem("clases"))
    const indexClass = clases.findIndex(clase => clase.id == idClase)
    const { alumnos } = clases[indexClass]
    // console.log("alumnos",idClase, alumnos)
    if(alumnos.length>0) {
        id = alumnos[alumnos.length-1].id+1
        // console.log("el id",alumnos[alumnos.length-1].id)
      } else {
        id = 1
      }
    // console.log(id)

    const newAlumno= {firstName: newAlumnoSave.name.trim(), lastName:newAlumnoSave.apeido.trim(),  attendance: [], id: id}
    // const index = clases.findIndex(clase => clase.id == idClase)
    // console.log("index", index)
    clases[indexClass].alumnos.push(newAlumno)
    const dataInString = JSON.stringify(clases)
    localStorage.setItem("clases", dataInString)
}

// Recibe la clase actualizada y el id de la clase para guardarlo en localStorage
function deleteStudent(idStudent, idClase) {
    const clases = JSON.parse(localStorage.getItem("clases"))
    const indexClass = clases.findIndex(clase => clase.id == idClase)

    const studentsUpdate = clases[indexClass].alumnos.filter(student => student.id != idStudent)
    clases[indexClass].alumnos=studentsUpdate

    const dataInString = JSON.stringify(clases)
    localStorage.setItem("clases", dataInString)
}

function deleteClase(idClase) {
    const classes = JSON.parse(localStorage.getItem("clases"))
    const classesUpdates = classes.filter(aClass => aClass.id != idClase)

    const dataInString = JSON.stringify(classesUpdates)
    localStorage.setItem("clases", dataInString)
    // console.log("se va a eliminar la clase", idClase, classesUpdates, classes)
}

// Guadar la asistencia en local storage
function saveAttendanceLocalStorage(idClase, idStudent, dataAttendance) {

    
    const clases = JSON.parse(localStorage.getItem("clases"))
    // Encuentra el indice del arreglo con que tiene el id de la clase
    const indexClass = clases.findIndex(clase => clase.id == idClase)
    const { alumnos } = clases[indexClass]


    // Encuentra el indice del arreglo con que tiene el id del alumno
    const indexStudent = alumnos.findIndex(student => student.id == idStudent)
    const { attendance }  = alumnos[indexStudent]



    // verifica si la fecha ya esta registrada
    const indexDay = attendance.findIndex(data => data.day === dataAttendance.day)
    if(indexDay != -1) {
        // console.log("esta duplicado")
        clases[indexClass].alumnos[indexStudent].attendance[indexDay] = dataAttendance
    } else {
        clases[indexClass].alumnos[indexStudent].attendance.push(dataAttendance)
    }
    // console.log(clases[indexClass].alumnos[indexStudent].attendance)
    // remplaza la informacion por la actualizada en local starage
    const dataInString = JSON.stringify(clases)
    localStorage.setItem("clases", dataInString)
}

function saveAttendanceDay(idClase, day) {
    const classes = JSON.parse(localStorage.getItem("clases"))
    const indexClass = classes.findIndex(aClass => aClass.id == idClase)
    // console.log(indexClass)
    const dateRepeat = classes[indexClass].attendanceDays.findIndex(dayIn => dayIn === day)
    if(dateRepeat != -1) {
        console.log("fechaRepetida")
    } else {
        classes[indexClass].attendanceDays.push(day)
    }
    // console.log(classes[indexClass].attendanceDays) 
    const dataInString = JSON.stringify(classes)
    localStorage.setItem("clases", dataInString)
}


function creaFakeData() {
        const clases =[
            {name: "Matemáticas I",  grup: "4B", semester: "2", year: "2022", school: "Edith Stein", id: 1,
            attendanceDays: ['2/12/2022', '3/12/2022', '4/12/2022', '5/12/2022', '6/12/2022'],
            alumnos: [
                {firstName: "Alyabra Alejandro", lastName: "Vargas Chávez", attendance: [{day: '2/12/2022', status: 'present'}, {day: '3/12/2022', status: 'present'}, {day: '4/12/2022', status: 'present'}, {day: '5/12/2022', status: 'present'}, {day: '6/12/2022', status: 'present'}],  id: 1},
                {firstName: "Alejandro", lastName: "Chávez", attendance: [{day: '2/12/2022', status: 'present'}, {day: '3/12/2022', status: 'present'}, {day: '4/12/2022', status: 'present'}, {day: '5/12/2022', status: 'present'}, {day: '6/12/2022', status: 'present'}],  id: 2},
                {firstName: "Gwendoline", lastName: "Arnica", attendance: [{day: '2/12/2022', status: 'present'}, {day: '3/12/2022', status: 'present'}, {day: '4/12/2022', status: 'present'}, {day: '5/12/2022', status: 'present'}, {day: '6/12/2022', status: 'present'}], id: 3},

            ]}, 

        ]
        const dataInString = JSON.stringify(clases)
        localStorage.setItem("clases", dataInString)
}
export {getLocalStorage, saveLocalStorage, saveNewStudentLocalStorage, deleteStudent, deleteClase, saveAttendanceLocalStorage,  saveAttendanceDay, creaFakeData}