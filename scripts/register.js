console.log("Register program initiated..."); 

let petSalon = {
    //properties
    title: "All the Fluffs!",
        catch_phrase:"Albuquerque's Premier Spa for our favorite furry friends",
        address:{
            street: "232 Navajo Street",
            city: "Albuquerque",
            state: "New Mexico",
            zip: "87106"    
        },
        pets:[]
    }

    //insert title info
    document.getElementById("title").innerHTML=`<h1>${petSalon.title}</h1>`;
    document.getElementById("catch-phrase").innerHTML=`
    <p>
        <h3>${petSalon.catch_phrase}</h3>
    </p>
    `;

    //create the constructor
    let c=0;
    //<-------------parameters  (local variables)--------------->
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed =breed;
    this.service =service;
    this.owner =owner;
    this.phone = phone;
    this.id=c++;//increase by 1
}


//create core pets
let pet1 = new Pet("Mr. Tinkles", 2, "Male", "Doberman", "Nail Trimming",  "James Dobson", "111-111-1111");
let pet2 = new Pet("Rickshaw", 6, "Female", "Pyrynes", "Vaccines",  "Julio Garz", "222-222-2222");
let pet3 = new Pet("Rez", 9, "Male", "Egyptian", "Grooming",  "Lev Eldemir", "333-333-3333");


let breedCats = ["Abyssinian", "American bobtail",
"British Shorthair",
"Burmese",
"Cornish Rex",
"Devon Rex",
"Himalayan",
"Maine Coon",
"Manx",
"Persian",
"Russian Blue",
"Scottish Fold",
"Siamese",
"Sphynx",
"Turkish Angora",
"Turkish Van",
"Unknow Cat Breed"]

let breedDogs = ["affenpinscher",
    "Afghan hound",
    "Airedale terrier",
    "Akita",
    "Alaskan Malamute",
    "American Staffordshire terrier",
    "American water spaniel",
    "Australian cattle dog",
    "Australian shepherd",
    "Australian terrier",
    "basenji",
    "basset hound",
    "beagle",
    "bearded collie",
    "Bedlington terrier",
    "Bernese mountain dog",
    "bichon frise",
    "black and tan coonhound",
    "bloodhound",
    "border collie",
    "border terrier",
    "borzoi",
    "Boston terrier",
    "bouvier des Flandres",
    "boxer",
    "briard",
    "Brittany",
    "Brussels griffon",
    "bull terrier",
    "bulldog",
    "bullmastiff",
    "cairn terrier",
    "Canaan dog",
    "Chesapeake Bay retriever",
    "Chihuahua",
    "Chinese crested",
    "Chinese shar-pei",
    "chow chow",
    "Clumber spaniel",
    "cocker spaniel",
    "collie",
    "curly-coated retriever",
    "dachshund",
    "Dalmatian",
    "Doberman pinscher",
    "English cocker spaniel",
    "English setter",
    "English springer spaniel",
    "English toy spaniel",
    "Eskimo dog",
    "Finnish spitz",
    "flat-coated retriever",
    "fox terrier",
    "foxhound",
    "French bulldog",
    "German shepherd",
    "German shorthaired pointer",
    "German wirehaired pointer",
    "golden retriever",
    "Gordon setter",
    "Great Dane",
    "greyhound",
    "Irish setter",
    "Irish water spaniel",
    "Irish wolfhound",
    "Jack Russell terrier",
    "Japanese spaniel",
    "keeshond",
    "Kerry blue terrier",
    "komondor",
    "kuvasz",
    "Labrador retrieve",
    "Lakeland terrier",
    "Lhasa apso",
    "Maltese",
    "Manchester terrier",
    "mastiff",
    "Mexican hairless",
    "Newfoundland",
    "Norwegian elkhound",
    "Norwich terrier",
    "otterhound",
    "papillon",
    "Pekingese",
    "pointer",
    "Pomeranian",
    "poodle",
    "pug",
    "puli",
    "Rhodesian ridgeback",
    "Rottweiler",
    "Saint Bernard",
    "saluki",
    "Samoyed",
    "schipperke",
    "schnauzer",
    "Scottish deerhound",
    "Scottish terrier",
    "Sealyham terrier",
    "Shetland sheepdog",
    "shih tzu",
    "Siberian husky",
    "silky terrier",
    "Skye terrier",
    "Staffordshire bull terrier",
    "soft-coated wheaten terrier",
    "Sussex spaniel",
    "spitz",
    "Tibetan terrier",
    "vizsla",
    "Weimaraner",
    "Welsh terrier",
    "West Highland white terrier",
    "whippet",
    "Yorkshire terrier",
    "Unknown Dog Breed" ];


newBreed=""

for(let i=0; i<breedDogs.length; i++) {
    let dog=breedDogs[i];
    let newBreed=`<option>${dog} -Dog</option>`;
    document.getElementById("dogs").innerHTML+=newBreed;
}

for(let i=0; i<breedCats.length; i++) {
    let cat=breedCats[i];
    let newBreed=`<option>${cat} -Cat</option>`;
    document.getElementById("cats").innerHTML+=newBreed;
}




   //create the pets
//let pet1=new Pet("Scooby", 60, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
//let pet2=new Pet("Scoobz", 68, "Female", "Chihuahua", "Wash", "Gary K", "666-666-6666");
//let pet3=new Pet("Fluffs", 80, "Male", "Doberman", "Trim", "Stephen Fry", "333-333-3333");

//register function
//getting the inpiuts
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("numAge");
let inputGender=document.getElementById("txtGender");
let iDogs=document.getElementById("txtBreed");
let iCats=document.getElementById("cats");
let iOther=document.getElementById("other");
let inputBreed= (iDogs);
//let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("numContact");

//validate the new pets info
function isValid(aPet){
    let valid=true;
    inputName.classList.remove("error")
    inputService.classList.remove("error")
    inputPhone.classList.remove("error")
    //check the conditions
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.phone==""){
        valid=false;
        inputPhone.classList.add("error");
    }

    return valid;
    
}


function register(){
    //getting the values and creating the job.
    let thePet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value);
//Validating thePet
if(isValid(thePet)==true){

//push obj into the array
petSalon.pets.push(thePet);

//display the pets
displayCards();
//displayTable();

//display the petSalon.pets array and refresh form 
console.log(petSalon.pets);
clearForm();
}
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value ="";
    iDogs.value ="";
    iCats.value ="";
    iOther.value="";
    inputBreed.value ="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value ="";
}

function deletePet(aPetID){
    let x = confirm("Are you sure you want to delete?");
    if (x)
    {console.log("Deleting the pet " + aPetID);
    document.getElementById(aPetID).remove(); //delete the card 
    let deleteIndex;
    for(let i=0;i<petSalon.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
        }
    }
    petSalon.pets.splice(deleteIndex, 1);
}else{}

}


    

//search onclick launches searches
function search(){
    searchnam();
    searchnum();
}

//pet name search function

function searchnam(){
    let searchName =document.getElementById("searchBar").value;
        for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(searchName.toLowerCase()==pet.name.toLowerCase()){
            // console.log("This is the pet!")
            correctPet = document.getElementById(pet.id).classList.add("selected")
            // .classList.add("selected") is the same as a separate line:   correctPet.classList.add("selected")
        }}

    }

    //phone number search function
function searchnum(){
        let searchPhone =document.getElementById("searchBar").value;
        for(let i=0; i<petSalon.pets.length; i++){
        let num = petSalon.pets[i];
        if(searchPhone.toLowerCase()==num.phone.toLowerCase()){
            correctPet = document.getElementById(num.id).classList.add("selected")
        }}
    }








 //intial funciton to push original pets and create publish them as cards upon opening the page
function init(){
    // console.log("init");
    petSalon.pets.push (pet1,pet2,pet3);
    displayCards();
    //displayTable();  *Extra challenge make tables work too
}
window.onload=init;