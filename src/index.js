let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// create div for each card and append to toy-collection
// Within each card, create h2.textContent = name, img.src = url, p.textContent = # of likes, & button 
// create manipulate append

// add card elements

const toysURL = "http://localhost:3000/toys";

function appendToyElements() {
  const toyCollection = document.getElementById("toy-collection")
  const toyCard = document.createElement("div").setAttribute("class", "card")
  const toyName = document.createElement("h2")
  const toyImage = document.createElement("img")
  const likes = document.createElement('p')
  const likeButton = document.createElement('button')

  toyImage.setAttribute("class", "toy-avatar")
  likeButton.setAttribute("class", "like-btn")

  document.toyCollection.append(toyCard)
  document.toyCard.append(toyName, toyImage, likes, likeButton)
}

function addToyContent(toy) {
  toyName.textContent = toy.name;
  toyImage.src = toy.image;
  likes.textContent = `${toy.likes} Likes`;
  likeButton.textContent = 'Like <3'
}

fetch(toysURL)
  .then ((response) => response.json())
  .then ((toys) => { 
    for (let toy in toys) {
      appendToyElements()
      addToyContent(toy)
    }
  })