const ratJail = document.querySelector('.rat-container');
const kyaruNom = document.querySelector('button');

function generateRat() {
    // create img
    const rat = document.createElement('img');
    // add rat pic in attribute
    rat.setAttribute('src', './rat.jpg');
    // add rat class
    rat.setAttribute('class', 'cool-rat');
    // create random coordinates for rat within jail
    const xCoord = Math.floor(Math.random() * 400);
    const yCoord = Math.floor(Math.random() * 400);
    
    rat.style.top = xCoord + 'px'; // this works
    // rat.setAttribute('top', xCoord + 'px'); // top is not an attribute, its a style property

    rat.style.left = yCoord + 'px'; 
    // rat.setAttribute('left', yCoord + 'px');

    // append rat to ratJail
    ratJail.appendChild(rat);
}

function eatRat() {
    // select all the rat
    
    // remove all the rat
    ratJail.innerHTML = '';

}

setInterval(() => {
    generateRat();
}, 200);

kyaruNom.addEventListener('click', () => {
    eatRat();
});
