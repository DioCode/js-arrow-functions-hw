let people = [
  {
    name: 'Steve',
    age: 11
  },
  {
    name: 'Jack',
    age: 20
  },
  {
    name: 'Kate',
    age: 17
  },
  {
    name: 'Alfred',
    age: 30
  }
];

const filterAges = people => people.filter(people => people.age > 18)

console.log(filterAges(people))

