import React from 'react'
import { finished } from 'stream';

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

async function exec() {
  try {
    const phase1 = await Promisewait('phase 1', rand(0, 3));
    console.log(phase1);

    const phase2 = await Promisewait('phase 2', rand(0, 3));
    console.log(phase2);

    const phase3 = await Promisewait('phase 3', rand(0, 3));
    console.log(phase3);

    console.log('Finished', phase3);
  } catch(e) {
    console.log(e);
  }
}

exec();

export default Promisewait
