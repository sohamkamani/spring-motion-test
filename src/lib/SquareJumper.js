'use strict';
import Square from './Square';
import SpringMotion from './SpringMotion';

var SquareJumper = function(options){
  let self = this;
  self.state = {
    direction : 'down'
  };
  self.square = new Square(options);
  self.motion = new SpringMotion({
    center : 100,
    s : options.y,
    k : 1e-2
  });
};

module.exports = SquareJumper;

SquareJumper.prototype.draw = function(ctx){
  this.square.draw(ctx);
};

SquareJumper.prototype.update = function(){
  let {square, motion} = this;
  // let {direction} = this.state;
  // if(direction === 'down'){
  //   square.y += 1;
  // }
  // if(direction === 'up'){
  //   square.y -= 1;
  // }
  // if(square.y > 150){
  //   this.state.direction = 'up';
  // }
  // if(square.y <3){
  //   this.state.direction = 'down';
  // }
  motion.move();
  square.y = motion.s;
};
