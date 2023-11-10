const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["IMG_0924-min.jpeg","IMG_0922-min.jpeg","IMG_5506-min.JPG","IMG_0923-min.jpeg","IMG_0918-min.jpeg"]
const altText = {
    "image1": "Grant",
    "image2": "Grant",
    "image3": "Grant",
    "image4": "Grant",
    "image5": "Grant"
}
/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText["images"+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText["images"+(i+1)]);
}
    newImage.addEventListener("click", displayImage);
}

btn.addEventListener("click", ()=>{
    if (btn.getAttribute("class") == "dark") { 
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundcolor = "rgba(0,0,0,0.5)";
        return
    }
    if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundcolor= "rgba(0,0,0,0)";
        return
    }
})

/* Wiring up the Darken/Lighten button */
