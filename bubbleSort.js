const bubbleSort = (arr, fn = ()=> {})=> {
  for (let i = 0; i < arr.length; i++) {
    let sorted = true
    for (let j = 0; j < arr.length; j++) {
      if(typeof arr[j] !== 'undefined' && typeof arr[j + 1] !== 'undefined') {
        fn()
        if(arr[j] > arr[j + 1]) {
          sorted = false
          let tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
        }
      }
    }
    if (sorted) {
      return arr
    }
  }
  return arr
}

module.exports = bubbleSort