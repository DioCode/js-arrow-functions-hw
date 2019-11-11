const reverse = arr => arr.reduceRight((first, second) => (first.push(second), first), []);

console.log(reverse(['a', 'b', 'c', 'd', 'e']));