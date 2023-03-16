const fetchSimution=()=>{
    return new Promise((resolve,rejact) =>{
        setTimeout(() => {
            resolve(dataBase);
            rejact(new Error ("Algo Salsio Mal"))
        },time );
    })
}

export default fetchSimution;