import React from 'react'

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) * min);
}

function Promisewait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('Error');
        return;
      }

      resolve(msg.toUpperCase() + ' - ok');
      return;
    }, time);
  });
}

Promisewait('phase 1', rand(0, 3))
  .then(value => {
    console.log(value);
    return Promisewait('phase 2', rand(0, 3));
  })
  .then(value => {
    console.log(value);
    return Promisewait('phase 3', rand(0, 3));
  })
  .then(value => {
    console.log(value);
  })
  .catch(e => console.log(e));

export default Promisewait
