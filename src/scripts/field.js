const allPlantsInField = []



// export const addPlant = (seedObject) => {
    
//     if (Array.isArray(seedObject)) {
//         seedObject.forEach(object => console.log(object))
//     }
//     else {allPlantsInField.push(seedObject)}
// }

export const addPlant = (seedObject) => {
    
    if (Array.isArray(seedObject)) {
        seedObject.forEach(element => allPlantsInField.push(seedObject))
    }
    else {allPlantsInField.push(seedObject)}
}

export const usePlants = () => {
    return allPlantsInField.slice()
}
