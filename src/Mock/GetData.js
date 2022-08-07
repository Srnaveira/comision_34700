import products from "./Data"

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products)
            }, 2000)
        })
}

export const getGenders = ( genderId ) => {
    return new Promise((resolve , reject) => {
           setTimeout(() => {
                resolve(products.filter((data) => data.genero.toUpperCase() === genderId))    
           }, 1000) 
        })
}




export const getProdID = ( id ) => {
    return new Promise((resolve , reject) => {
           setTimeout(() => {
                resolve(products.find((data) => data.id === id  ))       
           }, 1000) 
        })
}
