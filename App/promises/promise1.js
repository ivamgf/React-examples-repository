import { reject } from 'lodash'
import React from 'react'

function promise1() {
  const test1 = 'Hello World'
  function testPromise(test1) {
    return new promise1(
      (resolve, reject) => {
        if(typeof msg !== 'string') {
          reject('Error');
          return;
        }

        resolve(msg.toUpperCase() + ' - ok');
        return;
      }, time);
    };
}

testPromise(test1)
  .then(response => {
    console.log(resp);
    return testPromise(resp2);
  })
  .catch();

export default promise1
