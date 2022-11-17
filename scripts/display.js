function displayCards(){
    let card="";
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the HTML tmp
        card+=`<div class="card" id="${pet.id}">
                <p><h4 class="pet">${pet.name}</h4></p>
                <h5 class="pet"> Age: ${pet.age}<h5>
                <h5 class="pet"> Gender: ${pet.gender}<h5>
                <h5 class="pet"> Breed: ${pet.breed}<h5>
                <h5 class="pet"> Service: ${pet.service}<h5>
                <h5 class="pet"> Owner: ${pet.owner}<h5>
                <h5 class="pet"> Phone: ${pet.phone}<h5>
                <br>
                <button class="del-btn"  onclick="deletePet(${pet.id})">Delete</button>
            </div>
            `;
    }
    document.getElementById("pets").innerHTML=card;
    //append the tmp on the HTML
}

//function    displayTable{}



//research scope in JS 


// display on cards
 //   add CSS
 //   display on challenge
//    challenge table
    