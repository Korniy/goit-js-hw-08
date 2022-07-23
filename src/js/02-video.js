import Player from '@vimeo/player';
 
const throttle = require('lodash.throttle');

 const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
 
const onPlay = function(data) {
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
}
const saveTime = localStorage.getItem("videoplayer-current-time");
    
 player.on('timeupdate', throttle(onPlay, 1000));
    if(saveTime) {
        player.setCurrentTime(saveTime);
    }

    
 