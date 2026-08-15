// =========================================================
// CARD SCROLL ANIMATION
// =========================================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.05
    }
);

cards.forEach((card) => {
    observer.observe(card);
});


// =========================================================
// VIDEO MODAL
// =========================================================

function openVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("youtubeVideo");

    video.src =
        "https://www.youtube.com/embed/Q9Ove2Oqd0Q?si=ShLDWZSSw8T5fQpT";

    modal.style.display = "flex";
}


function closeVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("youtubeVideo");

    modal.style.display = "none";

    // Stop the video
    video.src = "";
}


// Close the modal when clicking outside of the video

window.addEventListener("click", function(event) {

    const modal = document.getElementById("videoModal");

    if (event.target === modal) {
        closeVideo();
    }

});


// =========================================================
// MUSIC MODAL
// =========================================================

function openMusic() {

    const modal = document.getElementById("musicModal");

    modal.style.display = "flex";
}


function closeMusic() {

    const modal = document.getElementById("musicModal");

    const audio = document.getElementById("audioPlayer");

    audio.pause();

    modal.style.display = "none";
}


// =========================================================
// PLAY SONG
// =========================================================

function playSong(title, file) {

    const audio = document.getElementById("audioPlayer");

    const songTitle = document.getElementById("songTitle");

    const headerSongTitle =
        document.getElementById("headerSongTitle");


    // Change the title in the music modal

    songTitle.textContent = title;


    // Change the title in the header

    headerSongTitle.textContent = title;


    // Change the music file

    audio.src = file;


    // Play the new song

    audio.play();
}


// =========================================================
// HEADER PLAY / PAUSE
// =========================================================

function toggleHeaderMusic() {

    const audio =
        document.getElementById("audioPlayer");

    const button =
        document.getElementById("headerPlayButton");


    if (audio.paused) {

        audio.play();

        button.textContent = "❚❚";

    } else {

        audio.pause();

        button.textContent = "▶";

    }
}


// =========================================================
// KEEP HEADER BUTTON IN SYNC
// =========================================================

const audio =
    document.getElementById("audioPlayer");

const headerButton =
    document.getElementById("headerPlayButton");


audio.addEventListener("play", function() {

    headerButton.textContent = "❚❚";

});


audio.addEventListener("pause", function() {

    headerButton.textContent = "▶";

});


audio.addEventListener("ended", function() {

    headerButton.textContent = "▶";

});


// =========================================================
// PHOTO GALLERY
// =========================================================

const galleryPhotos = [

    "images/photos/Image2.jpg",
    "images/photos/Image1.jpg",
    "images/photos/Image3.jpg",
    "images/photos/Image4.jpg",
    "images/photos/Image5.jpg",
    "images/photos/Image6.jpg",
    "images/photos/Image7.jpg",
    "images/photos/Image8.jpg",
    "images/photos/Image9.jpg",
    "images/photos/Image10.jpg",
    "images/photos/Image11.jpg"
    

];


let currentPhoto = 0;


// Open gallery

function openGallery() {

    const modal =
        document.getElementById("photoModal");

    modal.style.display = "flex";

    currentPhoto = 0;

    showPhoto();

}


// Close gallery

function closeGallery() {

    const modal =
        document.getElementById("photoModal");

    modal.style.display = "none";

}


// Show current photo

function showPhoto() {

    const image =
        document.getElementById("galleryImage");

    const counter =
        document.getElementById("photoCounter");


    image.src =
        galleryPhotos[currentPhoto];


    counter.textContent =
        `${currentPhoto + 1} / ${galleryPhotos.length}`;

}


// Previous photo

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto =
            galleryPhotos.length - 1;

    }

    showPhoto();

}


// Next photo

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= galleryPhotos.length) {

        currentPhoto = 0;

    }

    showPhoto();

}