'use strict';

var imgCount = 0;
var activeImage = document.getElementById("active-img");
var description = document.getElementsByClassName("info").item(0);
var title = document.getElementById("title");
var details = document.getElementById("details");
var thumbNails = document.getElementsByClassName("thumbnails").item(0);
var images = [
    {
        "number": 0,
        "title": "Eden day - 01",
        "textColor": "white",
        "details": "Eden's first day on this planet! Already looking disappointed...",
        "source": "img/edenBirth.jpeg"
    },
    {
        "number": 1,
        "title": "Eden at 4 months",
        "textColor": "white",
        "details": "Eden when she was 4 months old, wearing a dress (or a curtain) for the first time.",
        "source": "img/edenFourMonths.jpeg"
    },
    {
        "number": 2,
        "title": "Eden Burrito",
        "textColor": "white",
        "details": "Eden wrapped in swaddle and two happy parents.",
        "source": "img/IMG_0426.JPG"
    },
    {
        "number": 3,
        "title": "Eden & the rabbit",
        "textColor": "white",
        "details": "1 month old Eden with the Rabbit from grandma Lenka",
        "source": "img/IMG_0334.JPG"
    },
    {
        "number": 4,
        "title": "Eden concussion",
        "textColor": "white",
        "details": "Taken few minutes after I dropped her on her head... I was sure that this was it...",
        "source": "img/IMG_0420.JPG"
    },
    {
        "number": 5,
        "title": "Lighting candles",
        "textColor": "white",
        "details": "Lighting Shabbat candles with grandma Orna.",
        "source": "img/IMG_0602.JPG"
    },
    {
        "number": 6,
        "title": "Eden & the dinosaur!",
        "textColor": "white",
        "details": "Eden with grandpa Danny!",
        "source": "img/IMG_0579.JPG"
    },
    {
        "number": 7,
        "title": "Happy grandparents",
        "textColor": "white",
        "details": "Eden's first visit in Israel!",
        "source": "img/IMG_0595.JPG"
    }
]

updateImage();
loadThumbnails();

function loadThumbnails() {
    for (let image of images) {
        let thumbnail = document.createElement('img');
        thumbnail.setAttribute("onclick", `selectImage(${image.number})`);
        thumbnail.className = "thumbnail";
        thumbnail.height = 80;
        thumbnail.width = 100;
        thumbnail.src = image.source;
        thumbNails.appendChild(thumbnail);

    }
}

function selectImage(imageNum) {
    imgCount = imageNum;
    console.log("method was called");
    updateImage();
}

function updateImage() {
    activeImage.setAttribute('src', images[imgCount].source)
    title.innerHTML = images[imgCount].title;
    details.innerHTML = images[imgCount].details;
    description.setAttribute('style', `color: ${images[imgCount].textColor}`)
}

function nextImage() {
    if (imgCount < images.length - 1) imgCount++;
    else imgCount = 0;
    updateImage();
}

function previousImage() {
    if (imgCount > 0) imgCount--;
    else imgCount = images.length - 1;
    updateImage();
}

