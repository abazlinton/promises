

// const makeAPromise = () => {
//   return new Promise((resolve) => {
//     resolve("yo")
//   })
// }


// const in1SecInvokeCallback = (callback) => {
//   setTimeout(callback, 1000);
// }

// // in1SecInvokeCallback(() => {
// //   console.log('first callback');
// //   in1SecInvokeCallback(() => {
// //     console.log('second callback');
// //     in1SecInvokeCallback(() => {
// //       console.log('third callback');
// //     })
// //   })
// // })

// makeAPromise().then(console.log)

const alwaysResolves = () => {
  return new Promise((resolve) => {
    resolve();
  })
}

// const resolvesEventually = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 3000)
//   })
// }

const neverResolves = () => {
  return new Promise((resolve, reject) => {
    reject();
  })
}

const sometimesResolves = (coinFlip) => {
  return new Promise((resolve, reject) => {
    if (coinFlip === 'heads') {
      resolve()
    } else if (coinFlip == 'tails') {
      reject()
    }
  })
}

const success = function () {
  console.log('Thanks you are very trustworthy');
}

const fail = function () {
  console.log("I'm never trusting you again")
}

// alwaysResolves().then(success)
// resolvesEventually().then(success)
// neverResolves().catch(fail)
// sometimesResolves('heads').then(success).catch(fail)
// sometimesResolves('tails').then(success).catch(fail)

const resolvesEventually = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('tails')
    }, 3000)
  })
}

resolvesEventually().then(sometimesResolves).then(success).catch(fail)


