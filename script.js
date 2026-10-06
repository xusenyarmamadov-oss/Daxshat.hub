// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


// ============================
// VIDEO PLAYER
// ============================

const videoModal = document.getElementById("videoModal");
const movieVideo = document.getElementById("movieVideo");
const videoSource = document.getElementById("videoSource");
const videoTitle = document.getElementById("videoTitle");

function openVideo(episode) {

    videoSource.src = `ovchi-itlar-${episode}.mp4`;

    videoTitle.textContent = `Ovchi itlar — ${episode}-qism`;

    movieVideo.load();

    videoModal.classList.add("active");
}

function closeVideo() {

    movieVideo.pause();

    movieVideo.currentTime = 0;

    videoSource.src = "";

    movieVideo.load();

    videoModal.classList.remove("active");
}

videoModal.addEventListener("click", (event) => {

    if (event.target === videoModal) {
        closeVideo();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeVideo();
    }

});


// ============================
// ISHLAYDIGAN QIDIRUV
// ============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const episodeCards = document.querySelectorAll(".episode-card");
const noResult = document.getElementById("noResult");

function searchMovies() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    episodeCards.forEach(card => {

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const part = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        const dataTitle = card
            .getAttribute("data-title")
            .toLowerCase();

        // Masalan:
        // "ovchi"
        // "1"
        // "1-qism"
        // "ovchi itlar"
        // "7-qism"

        if (
            title.includes(searchText) ||
            part.includes(searchText) ||
            dataTitle.includes(searchText)
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    // Hech narsa topilmasa

    if (found === 0 && searchText !== "") {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}


// Har yozganingda qidiradi
searchInput.addEventListener("input", searchMovies);


// 🔍 tugmasini bosganda ham qidiradi
searchBtn.addEventListener("click", searchMovies);


// Enter bosganda ham qidiradi
searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchMovies();
    }

});