'use strict';
import Square from './Square';
import SpringMotion from './SpringMotion';
import PointStream from './PointStream';

var SquareJumper = function(options){
  let self = this;
  self.state = {
    direction : 'down'
  };
  self.square = new Square(options);
  self.pointStream = new PointStream({
    xInit : 0,
    xIncrement : 10,
    maxX : options.maxX
  });
  self.motion = new SpringMotion({
    center : 100,
    s : options.y,
    k : 1e-2
  });
};

module.exports = SquareJumper;

SquareJumper.prototype.draw = function(ctx){
  this.square.draw(ctx);
  this.pointStream.draw(ctx);
};

SquareJumper.prototype.update = function(){
  let {square, motion, pointStream} = this;
  pointStream.next(motion.s);
  motion.move();
  square.y = motion.s;
};
