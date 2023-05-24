export let  score1 = 0
import {
    container,
    pac_style,
    pacman,
    grid
    
} from './modules.js';


export function displayGrid(){
    container.innerHTML= null
    for(var y = 0;y<grid.length;y++){
        container.innerHTML += '<div class="row"></div>'
        for(var x = 0;x<grid[0].length;x++){
            if(grid[y][x] == 1){
                container.innerHTML += '\n<div class="coin"></div>'
            }
            else if(grid[y][x] == 2){
            container.innerHTML += '\n<div class="brick"></div>'
            }
            else if(grid[y][x] == 3){
                container.innerHTML += '\n<div class="star"></div>'
            }
            else{
                container.innerHTML += '\n<div class="empty"></div>'
                
            }
        }
    }
}
export function playIntroMusic() {
    var audio = new Audio('/tunes/Intro.mp3');
    audio.play();
}
export function displayPac(){
    pac_style.top = ((pacman.y)*30)+'px'
    pac_style.left = ((pacman.x)*30)+'px'  
}
export function coinCheck(){
    if(grid[pacman.y][pacman.x] === 1 || grid[pacman.y][pacman.x] === 3){
        grid[pacman.y][pacman.x] = 0
        score1+= 10
        
    }
}
export function initialize(){
    displayPac()
    coinCheck()
    displayGrid() 
}
