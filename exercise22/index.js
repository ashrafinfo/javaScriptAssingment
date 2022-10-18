let food = ['Nihari', 'Pulao', 'Karahi', 'Chanay'];
let desert = ['Custurd', 'Halwa', 'Gulab Jamun', 'Jalebi'];


let starter = {
    'Simple Food': food,
    'Sweet': desert
}

console.log(starter);
console.log(starter.Simple Food.[2]); //error
console.log(starter["Simple Food"][2]); //solution
