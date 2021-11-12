const videoToCanvas = document.querySelectorAll('.video-to-canvas-component');
if (videoToCanvas) {
    videoToCanvas.forEach((item) => {

        const canvas = item.querySelector('.canvas-video-canvas');
        const video = item.querySelector('.canvas-video-video');
        const ctx = canvas.getContext('2d');

        const playButton = document.createElement('button');
        playButton.innerHTML = 'Play video';
        document.body.appendChild(playButton);

        playButton.onclick = function () {
            video.play(); 
            console.log(video);
            console.log("Tocar video");
        };
        playButton.click();
        playButton.style.zIndex = -1;
        playButton.style.position = 'fixed';
        playButton.style.opacity = 0;
        playButton.style.display = 'none';

        //video.play(); 
        video.addEventListener('play', () => {
            function step() {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                console.log('requestFrame');
                requestAnimationFrame(step)
            }
            requestAnimationFrame(step);
        });
        video.style.zIndex = -1;
        video.style.position = 'fixed';
        video.style.opacity = 0;
        video.style.display = 'none';
    });
}