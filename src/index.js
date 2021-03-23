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

// step 1 run json-server --watch db.json
// step 2 console.log something in index to make sure its attached 
// step 3 create function to createAndAppendToyElements using details from README
// step 4 use fetch to get toy collection data - type is array of objects
// step 4 iterate through all the objects in the array & run the createAndAppendToyElements
// step 5 create toyForm with a POST request to be added to toy-collection
// step 6 create patch request when the button is clicked, the likes are incremented by 1 and patched to the db.json


// Each card should have the following child elements:

// h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn"
// After all of that, the toy card should resemble:

//   <div class="card">
//     <h2>Woody</h2>
//     <img src=toy_image_url class="toy-avatar" />
//     <p>4 Likes </p>
//     <button class="like-btn">Like <3</button>
//   </div>


// console.log('hi')

const toyCollectionURL = 'http://localhost:3000/toys'

function createAndAppendToyElements(toy) {
  const toyCollection = document.getElementById('toy-collection')
  const card = document.createElement('div')
  const toyName = document.createElement('h2')
  const toyImage = document.createElement('img')
  const likes = document.createElement('p')
  const likeButton = document.createElement('button')

  card.className = 'card'

  toyName.textContent = toy.name

  toyImage.className = 'toy-avatar'
  toyImage.src = toy.image

  likes.textContent = `${toy.likes} Likes`

  likeButton.className = 'like-btn'
  likeButton.innerText = 'Like <3'

  toyCollection.append(card)
  card.append(toyName, toyImage, likes, likeButton)
}

function getToys(){
  fetch(toyCollectionURL)
  .then(response => response.json())
  .then(toyArray=>toyArray.forEach(toy=>createAndAppendToyElements(toy)))
}

getToys()


function postToy(toy) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(toy)
  }

  fetch(toyCollectionURL, options)
}


document.addEventListener('submit', function(event) {
    const addNewToyForm = document.querySelector('.add-toy-form')
    event.preventDefault()
    const newToy = {
      'name': event.target.name.value,
      'image': event.target.image.value,
      'likes': 0
    }
    postToy(newToy)
    createAndAppendToyElements(newToy)
  })

  //  working through patching likes

  // function patchLikes() {
  //   const options = {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'likes': new number // come back to this
  //     })
  //   }

  //   fetch(toyCollectionURL, options)
  // }

  // // function addLikes(toy) {

  // // }

  // // document.addEventListener('click', function(event) {
  // //   event.preventDefault()
  // // })