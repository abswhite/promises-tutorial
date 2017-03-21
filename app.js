'use strict';

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  //cleaning the room
  let isClean = false;
  if (isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('the room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('the room is ' + fromReject);
});
