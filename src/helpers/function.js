const getDate = () => {
    const day = new Date()
    const dateString = day.toLocaleDateString()
    return dateString
}

const sortArrayAbcName = (name1, name2) => {
    // console.log(name1, name2)
    if(name1.name > name2.name) return 1
    if(name1.name < name2.name) return -1
    return 0
}

const sortArrayAbcApeido = (name1, name2) => {
    // console.log(name1, name2)
    if(name1.lastName > name2.lastName) return 1
    if(name1.lastName < name2.lastName) return -1
    return 0
}

export { getDate, sortArrayAbcName, sortArrayAbcApeido }