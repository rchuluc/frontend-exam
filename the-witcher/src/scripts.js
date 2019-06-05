export const handleClosePlayer = () => {
  const player = document.getElementById("player")
  player.classList.add("hide")
}

export const handleOpenPlayer = videoId => {
  const player = document.getElementById("player")
  player.classList.remove("hide")
  const embeddedPlayer = document.getElementById("videoEmbedded")
  embeddedPlayer.src = `http://www.youtube.com/embed/${videoId}`
}

export const floatLabel = () => {
    const label = window.event.target.previousElementSibling;
  
    if (window.event.type === "focus") {
      label.classList = "form-label-float";
    } else if (window.event.type === "blur") {
      if (window.event.target.value !== "") {
        label.classList = "form-label-float";
      } else label.classList = "form-label-initial";
    }
  }