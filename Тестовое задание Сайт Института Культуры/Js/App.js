const videoBtn = document.querySelector('#content__cirle-play');
const videoFile = document.querySelector('#video-story');

const videoOverlay = document.querySelector('#video-story-overlay');




videoBtn.addEventListener('click', function () {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }

    if (videoFile.paused) {

        document.getElementById('content__video').style.visibility = 'hidden';

        videoFile.play();

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.classList.add.display = 'block';
        // document.getElementById('content__video').style.visibility = 'hidden';
        // Ессли надо,чтобы при паузе заставка возвращалась 
        videoFile.pause();

        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }
});

// accordion 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



// slider

