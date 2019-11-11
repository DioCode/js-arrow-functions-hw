const nameValidator = names => names.filter(names => names.length <= 7);

console.log(nameValidator(['John', 'Steve', 'Anny', 'Alexandra', 'Maksimilian']))
