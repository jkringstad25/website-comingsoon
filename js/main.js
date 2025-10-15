document.addEventListener("DOMContentLoaded", function () {
  "use strict";

            // FEATURES SECTION CAROUSEL
            var carousel = document.getElementById("coming-soon-carousel");
            var progressBar = document.querySelector(".carousel-progress .progress-bar");
            var interval = 10000; // Change this to match data-bs-interval

            function startProgressBar() {
                progressBar.style.transition = "none";
                progressBar.style.width = "0%";
                setTimeout(() => {
                    progressBar.style.transition = `width ${interval}ms linear`;
                    progressBar.style.width = "100%";
                }, 10);
            }

            var myCarousel = new bootstrap.Carousel(carousel, {
                interval: interval,
                ride: "carousel",
                pause: "true",
            });

            carousel.addEventListener("slide.bs.carousel", function () {
                startProgressBar();
            });

            startProgressBar(); // Start progress bar initially
});
