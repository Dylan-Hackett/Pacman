export let container = document.getElementById("container")
export let pac_style = document.getElementById("pacman").style
export let ghost1_style = document.getElementById("ghost1").style
export let ghost2_style = document.getElementById("ghost2").style
export let ghost3_style = document.getElementById("ghost3").style
export let ghost4_style = document.getElementById("ghost4").style
export let pacman = {x:1, y:1}
export let score = 0
export let ghost1 = {x:parseInt(Math.random()*12)+1, y:1, tagged:false, imgname: 'ghost',last_dir: parseInt(Math.random()*3)}
export let ghost2 = {x:parseInt(Math.random()*12)+1, y:1, tagged:false, imgname: 'N0f',last_dir: parseInt(Math.random()*3)}
export let ghost3 = {x:parseInt(Math.random()*12)+1, y:1, tagged:false, imgname: 'YMXv' ,last_dir: parseInt(Math.random()*3)}
export let ghost4 = {x:parseInt(Math.random()*12)+1, y:1, tagged:false, imgname: 'blue' ,last_dir: parseInt(Math.random()*3)}
export let grid =  [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
                    [2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2],
                    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
                    [2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
                    [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2],
                    [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2],
                    [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 1, 2],
                    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                    [2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2],
                    [2, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2],
                    [2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
                    [2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
                    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
                    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];
export let ghosts = [{ ghost: ghost1, style: ghost1_style },
                { ghost: ghost2, style: ghost2_style },
                { ghost: ghost3, style: ghost3_style },
                { ghost: ghost4, style: ghost4_style }];