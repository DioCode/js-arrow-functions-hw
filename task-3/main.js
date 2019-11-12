// const reverse = arr => arr.reduceRight((first, second) => (first.push(second), first), []);
const reverse = arr => {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return [reversedArr, arr]
}

console.log(reverse(['a', 'b', 'c', 'd', 'e']));

// make it with cycle for!