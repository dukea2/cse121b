/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ashley Bastian",
    photo: "images/profilepic.jpg",
    favoriteFoods: [
        'Pizza',
        'Pumpkin Pie',
        'Taco',
        'Cookie',
        'Pasta'
    ],
    hobbies: [
        'Puzzle',
        'Hiking',
        'Painting'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push (
    {
        place: 'Hauula, HI',
        length: '18 years',
    }
);

myProfile.placesLived.push (
    {
        place: 'Rexburg, ID',
        length: '6 years',
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const dl = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    dl.appendChild(dt);
    dl.appendChild(dd);
});