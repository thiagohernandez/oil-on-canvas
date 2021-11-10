const videoToCanvas = document.querySelectorAll('.video-to-canvas-component');
if (videoToCanvas) {
    videoToCanvas.forEach((item) => {
        const canvas = item.querySelector('canvas');
        const video = item.querySelector('video');
        let framerate = video.getAttribute('data-framerate');
        console.log(framerate);
        if (!framerate) {
            framerate = 30;
        }
        let ctx = canvas.getContext('2d');
        video.play(); 
        video.addEventListener('play', function() {
            var $this = this; //cache
            (function loop() {
                if (!$this.paused && !$this.ended) {
                ctx.drawImage($this, 0, 0);
                setTimeout(loop, 1000 / framerate); // drawing at 30fps
                }
            })();
        }, 0);
        video.style.display = 'none';
    });
}