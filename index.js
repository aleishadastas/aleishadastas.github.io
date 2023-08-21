document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video");

    // Add a click event listener to start playing the video
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

console.log(video.play)