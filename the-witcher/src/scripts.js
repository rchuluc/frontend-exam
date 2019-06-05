export const handleClosePlayer = () => {
    const player = document.getElementById('player')
    console.log(player)
    player.classList.add('hide')
    console.log(player.classList)
}

export const handleOpenPlayer = () => {
    const player = document.getElementById('player')
    console.log(player)
    player.classList.remove('hide')
    console.log(player.classList)
}

