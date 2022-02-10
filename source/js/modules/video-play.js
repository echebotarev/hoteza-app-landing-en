import { enableInlineVideo } from '../vendor/iphone-inline-video';

const initVideoPlay = () => {
  const videoPlayer = document.querySelector('.intro__media-video video');

  if (!videoPlayer) {
    return;
  }

  videoPlayer.addEventListener('loadeddata', () => {
    if (videoPlayer.readyState >= 4) {
      enableInlineVideo(videoPlayer);
    }
  });

  videoPlayer.play()
};

export {initVideoPlay};
