import { reject } from 'lodash'
import React from 'react'

function promise1() {
  const test1 = 'Hello World'
  function testPromise(test1) {
    return new promise1(
      (resolve, reject) => {
        if(typeOf (test1 !== 'string')
          reject(false);
      }
    );
  }
}

testPromise(test1)
  .then(response => {
    console.log(resp);
    return testPromise(resp2);
  })
  .catch();

export default promise1
