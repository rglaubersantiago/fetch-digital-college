// // Vai na api e busca os dados, retorna uma promisses.
// fetch("https://rickandmortyapi.com/api/character")

// // Converte a responta da api em json.
// .then(response => response.json())

// // Todo o response convertido está sendo chamado de data.
// .then(data => { 
//     console.log(data.results)
//     let tbody = document.querySelector("tbody")
//     for (let index = 0; index < data.results.length; index++) {
//         let tr = document.createElement("tr")
//         // O += é para que não sobrescreva, e mostre todas as informações.
//         tr.innerHTML += `
//                     <td>${data.results[index].name}</td>
//                     <td>${data.results[index].location.name}</td>
//                     <td>${data.results[index].gender}</td>
//                     <td>${data.results[index].species}</td>
//                     <td><img src="${data.results[index].image}"</td>

//         `
//         tbody.appendChild(tr)
//     }
// } )

// Forma alternativa

const getData = async () => {
    try{
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    let tbody = document.querySelector("tbody")
    for (let index = 0; index < data.results.length; index++) {
        let tr = document.createElement("tr")
        // O += é para que não sobrescreva, e mostre todas as informações.
        tr.innerHTML = `
                            <td>${data.results[index].name}</td>
                            <td>${data.results[index].location.name}</td>
                            <td>${data.results[index].gender}</td>
                            <td>${data.results[index].species}</td>
                            <td><img src="${data.results[index].image}"</td>
        
                `
        tbody.appendChild(tr)
    }
} catch (error){
    console.log(error)
}
}
getData()
