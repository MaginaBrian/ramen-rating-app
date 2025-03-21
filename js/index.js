
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen Ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview" },
    { id: 4, name: "Tan Tan Ramen", restaurant: "Yakuza", image: "https://moringa.instructure.com/courses/967/files/517797/preview",rating: 4, comment: "Very tasty!" },
    { id: 5, name: "Kaisen Ramen", restaurant: "Ichiran", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgyhD3LmuBWxwVUPVcDIe6hLrinKIODoknA&s",rating: 5}
];

const setBackgroundWithStyle =() =>{
    document.body.style.backgroundImage = "url('../images/japan.png')";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.padding = "16px";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.fontFamily = "var(--body-font)";
    document.body.style.color = "var(--primary-white)";
    

}

const displayRamens = () => {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = ''; 
    
    ramens.forEach((ramen) => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        menu.appendChild(img);
    });
}

const handleClick = (ramen) =>{
    const detail = document.getElementById('ramen-detail');
    detail.querySelector('.image').src = ramen.image;
    detail.querySelector('.name').textContent = ramen.name;
    detail.querySelector('.restaurant').textContent = ramen.restaurant;
    detail.querySelector('.rating').textContent = ramen.rating ? `Rating: ${ramen.rating}/5` : '';
    detail.querySelector('.comment').textContent = ramen.comment || '';
}

const addSubmitListener =() => {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: form.querySelector('#name').value,
            restaurant: form.querySelector('#restaurant').value,
            image: form.querySelector('#image').value,
            rating: parseInt(form.querySelector('#rating').value) || undefined,
            comment: form.querySelector('#comment').value || undefined
        };



        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
   setBackgroundWithStyle();
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}


document.addEventListener('DOMContentLoaded', main);