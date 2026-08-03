function openVideo(videoElement) {
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const source = videoElement.querySelector("source");

  if (!source) {
    return;
  }

  modal.style.display = "flex";
  modalVideo.src = source.src;
  modalVideo.load();

  modalVideo.play().catch(() => {
    // Ignore autoplay restrictions; the user can press play manually.
  });
}

function closeVideo() {
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");

  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}