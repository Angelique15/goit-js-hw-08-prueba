import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// Obtener el tiempo de reproducción guardado
const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
    player.setCurrentTime(storedTime);
}

// Escuchar el evento timeupdate del reproductor
player.on('timeupdate', throttle(function (data) {
    // Guardar el tiempo de reproducción actual en el almacenamiento local
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
