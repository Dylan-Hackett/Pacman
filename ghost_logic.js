import {
    ghost1_style,
    ghost2_style,
    ghost3_style,
    ghost4_style,
    pacman,
    grid
    
} from './modules.js';



export function hideAllGhosts() {
    const ghostStyles = [ghost1_style, ghost2_style, ghost3_style, ghost4_style];
    for (let i = 0; i < ghostStyles.length; i++) {
        ghostStyles[i].display = 'none';
    }
}
export let  lost = false,
            star = true,
            spin = 0,
            score = 0



export function ghosted(ghost, ghost_x, ghost_y, last_dir, ghost_style, tagged, imgname) {
    var pac_x = pacman.x; 
    var pac_y = pacman.y; 
    var random_move = Math.random() < 0.3; 
    var directions = [0, 1, 2, 3];
    directions.splice(last_dir, 1);

    var random_dir;
    if (random_move) {
        random_dir = directions[Math.floor(Math.random() * 3)];
    } 
    else {
        if (ghost_y < pac_y && grid[ghost_y + 1][ghost_x] !== 2) {
            random_dir = 2;
        } 
        else if (ghost_y > pac_y && grid[ghost_y - 1][ghost_x] !== 2) {
            random_dir = 3;
        } 
        else if (ghost_x < pac_x && grid[ghost_y][ghost_x + 1] !== 2) {
            random_dir = 0;
        } 
        else if (ghost_x >= pac_x && grid[ghost_y][ghost_x - 1] !== 2) {
            random_dir = 1;
        } 
    }
    if (tagged) {
        ghost_style.backgroundImage = 'url(images/tagged.gif)';
        if((Math.abs(ghost_x-pac_x)<2) && (Math.abs(ghost_y-pac_y)<2)){
            ghost_y = 1
            if (pac_x > 5){
                ghost_x = 1
            }
            else{
                ghost_x = 12
            }
            
            
            flashPlus100();
            ghost_style.backgroundImage =  `url(images/${imgname}.gif)`
            ghost.tagged = false
        }
        if (random_dir === 1 && grid[ghost_y][ghost_x + 1] !== 2) {
            ghost_x++;
        } else if (random_dir === 0 && grid[ghost_y][ghost_x - 1] !== 2) {
            ghost_x--;
        } else if (random_dir === 3 && grid[ghost_y + 1][ghost_x] !== 2) {
            ghost_y++;
        } else if (random_dir === 2 && grid[ghost_y - 1][ghost_x] !== 2) {
            ghost_y--;
        }
    }
    else{
        if (random_dir === 0 && grid[ghost_y][ghost_x + 1] !== 2) {
            ghost_x++;
        } else if (random_dir === 1 && grid[ghost_y][ghost_x - 1] !== 2) {
            ghost_x--;
        } else if (random_dir === 2 && grid[ghost_y + 1][ghost_x] !== 2) {
            ghost_y++;
        } else if (random_dir === 3 && grid[ghost_y - 1][ghost_x] !== 2) {
            ghost_y--;
        }
    }
    last_dir = random_dir;
    ghost_style.left = (ghost_x * 30) + 'px';
    ghost_style.top = (ghost_y * 30) + 'px';

    if (ghost_y === 14) {
        ghost_y = 1;
        ghost_x = parseInt(Math.random() * 10 + 1);
    }
    return [ghost_x, ghost_y, last_dir];
}
