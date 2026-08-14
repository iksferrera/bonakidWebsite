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


// Video Modal

function openVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("youtubeVideo");

    video.src = "https://www.youtube.com/embed/Q9Ove2Oqd0Q?si=ShLDWZSSw8T5fQpT";

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

// Music Modal

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


function playSong(title, file) {

    const audio = document.getElementById("audioPlayer");

    const songTitle = document.getElementById("songTitle");

    songTitle.textContent = title;

    audio.src = file;

    audio.play();
}