export async function getAllPokemon(url){
    let fetchData = new Promise((resolve, reject)=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    });

    return fetchData;
}

export async function getEachPokemonUrl(url){
    let fetchPokemonDetails = new Promise((resolve, reject)=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })

    return fetchPokemonDetails;
}