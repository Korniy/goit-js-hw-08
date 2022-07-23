import Player from '@vimeo/player';
 
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const KEY = 'videoplayer-current-time';
 
const onPlay = function (data) {
    const time = data.seconds;
    localStorage.setItem(KEY, time);
};
const saveTime = localStorage.getItem(KEY);
    
 player.on('timeupdate', throttle(onPlay, 1000));
    if(saveTime) {
        player.setCurrentTime(saveTime);
};

    
 