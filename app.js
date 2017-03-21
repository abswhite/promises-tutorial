'use strict';

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  //cleaning the room
  let isClean = true;
  if (isClean) {
    resolve('clean');
  } else {
    reject();
  }
});

promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('the room is ' + resolve());
})
