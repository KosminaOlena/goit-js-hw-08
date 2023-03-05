import Player from '@vimeo/player';
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
player.on('timeupdate', onPlay);
function onPlay(data) {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);