// local storage
export const fetchData = (key)=>{
    return JSON.parse(localStorage.getItem(key))
}

export const deleteItems = ({key})=> {
    localStorage.removeItem(key)
}