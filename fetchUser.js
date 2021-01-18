const cardContainer = document.getElementById("user-list")
const url = "https://randomuser.me/api/?results=10"
fetch(url)
.then((data)=> data.json()) // changin
.then((data)=>{
    console.log(data)
    let users = data.results;
    return users.map((user) => {
        let card = createNode('div');
        card.classList.add('card');
        let content = `<h2>${user.name.first} ${user.name.last} ${user.medium}</h2>
                    <p>${user.gender}</p>`;
        card.innerHTML = content;
        append(cardContainer, card);
    })
})

//function to create an element
function createNode(element){
    return document.createElement(element)
}


//funtion to append an element
function append(parent, child){
    return parent.appendChild(child)
}