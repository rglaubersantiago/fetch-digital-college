const getData = async () => {
    try {
        const response = await fetch("https://dattebayo-api.onrender.com/characters")
        const data = await response.json()
        console.log(data.characters[1].images[1])
        let tbody = document.querySelector("tbody")
        for (let index = 0; index < data.characters.length; index++) {
           let tr = document.createElement("tr")
           tr.innerHTML = `
                    <td>${data.characters[index].name}</td>
                    <td>${data.characters[index].family.father}</td>
                    <td>${data.characters[index].jutsu[index]}</td>
                    <td>${data.characters[index].personal.clan}</td>
                    <td><img src= ${data.characters[index].images[0]}></td>
           `
        tbody.appendChild(tr)
        }
    } catch (error){
          
    }
}

getData()
