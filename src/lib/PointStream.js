'use strict';

import assign from 'object-assign';

let PointStream = function(options){
  assign(this, options);
  this.points = [];
  console.log('log:',options);
};

module.exports = PointStream;

PointStream.prototype.next = function(y){
  let {xIncrement, points, xInit, maxX} = this;
  points.forEach(point =>{
    point.x += xIncrement;
  });
  points.push({
    y,
    x : xInit
  });
  if( points[0].x > maxX ){
    points.shift();
  }
  console.log('log:',points[points.length - 1].x,points.length);
};

PointStream.prototype.draw = function(ctx){
  let {points} = this;
  points.forEach(point =>{
    let {x,y} = point;
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  });
};
