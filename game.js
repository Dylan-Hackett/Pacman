
import {
  container,
  pac_style,
  pacman,
  grid,
  ghosts,
} from './modules.js';

import {
  ghosted,
  hideAllGhosts
} from './ghost_logic.js';

import {
  initialize,
  playIntroMusic,
} from './pac_logic.js';

export let  lost = false,
            star = true,
            introMusicPlayed = false,
            deathMusicPlayed = false,
            spin = 0,
            ready = false,
            score = 0

function lossCheck(ghost_style, tagged) {
  if ((pac_style.top === ghost_style.top) && (pac_style.left === ghost_style.left) && ready === true && !deathMusicPlayed && !tagged) {
      gameover.style.display = 'flex';
      var audio = new Audio('/tunes/Death.mp3');
      audio.play();
      deathMusicPlayed = true;
      lost = true;
      pac_style.display = 'none';
      hideAllGhosts();
  }
}
setInterval(() => {
  rdy.style.display = 'none'
  monk.style.display = 'none'
  ready = true
  
}, 3000);

setInterval(() => {
  for (let i = 0; i < ghosts.length; i++) {
      const ghostObj = ghosts[i];
      lossCheck(ghostObj.style, ghostObj.tagged);
  }
}, 100);

setInterval(() => {
  for (let i = 0; i < ghosts.length; i++) {
      const ghostObj = ghosts[i];
      ghostObj.ghost.last_dir = parseInt(Math.random() * 4);
      const [new_ghost_x, new_ghost_y] = ghosted(
          ghostObj.ghost,
          ghostObj.ghost.x,
          ghostObj.ghost.y,
          ghostObj.ghost.last_dir,
          ghostObj.style,
          ghostObj.ghost.tagged,
          ghostObj.ghost.imgname
      );
      ghostObj.ghost.x = new_ghost_x;
      ghostObj.ghost.y = new_ghost_y;
  }
  if (lost === true) {
      spin += 360;
      container.style.transform = 'rotate(' + spin + 'deg)';
  }
}, 300);
initialize()

document.addEventListener("keyup", function(event) {
  let newX = pacman.x;
  let newY = pacman.y;
  let rotation = 0;

  if (!introMusicPlayed) {
      playIntroMusic();
      introMusicPlayed = true;
  }
  if ((event.key === "ArrowRight" || event.key === "d") && grid[pacman.y][pacman.x + 1] !== 2) {
      newX += 1;
      rotation = 0;
  } else if( (event.key === "ArrowLeft" || event.key === "a") && grid[pacman.y][pacman.x - 1] !== 2) {
      newX -= 1;
      rotation = 180;
  } else if ((event.key === "ArrowUp" || event.key === "w") && grid[pacman.y - 1][pacman.x] !== 2) {
      newY -= 1;
      rotation = 270;
  } else if ((event.key === "ArrowDown" || event.key === "s") && grid[pacman.y + 1][pacman.x] !== 2) {
      newY += 1;
      rotation = 90;
  }
  if(((pacman.y >= 10) && (pacman.x == 6)) && star == true){
      for (let i = 0; i < ghosts.length; i++) {
          const ghostObj = ghosts[i];
          ghostObj.ghost.tagged = true;
          star = false;
          
      }
  }
  if (newX !== pacman.x || newY !== pacman.y) {
      pacman.x = newX;
      pacman.y = newY;
      pac_style.transform = `rotate(${rotation}deg)`;
      initialize();
  }

});

});
