function openVideo(videoElement) {

  const modal =
    document.getElementById("video-modal");

  const modalVideo =
    document.getElementById("modal-video");

  modal.style.display = "flex";

  modalVideo.src =
    videoElement.querySelector("source").src;

  modalVideo.play();
}

function closeVideo() {

  const modal =
    document.getElementById("video-modal");

  const modalVideo =
    document.getElementById("modal-video");

  modal.style.display = "none";

  modalVideo.pause();

  modalVideo.src = "";
}