/*
A child is playing with a ball on the nth floor of a tall building. 
The height of this floor above ground level, h, is known.

He drops the ball out of the window. 
The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (
including when it's falling and bouncing)?
*/

function bouncingBall(h,  bounce,  window) {
  return h > 0 && bounce > 0 && bounce < 1 && window < h ? timesBounced(h, bounce, window)
  : -1; 
  
  function timesBounced(h, bounce, window) {
    let counter = 0; 
    while (h > window) {
      h *= bounce;
      counter += 2;
    }
    return counter -1;
  }
}
