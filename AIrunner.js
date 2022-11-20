// 7
function AI(game){
    for(let i = 0; i < game.levels; i++){
      let goal = game.inspectTG().objects[0].location
      let str = goal[0] > 0 ? `>${goal[0]/10}`: `<${goal[1]/10 * -1}`
      game.press(str + 'x1');
    }
}