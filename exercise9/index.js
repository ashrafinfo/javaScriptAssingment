let a = 'MuHaMMad AshRaF';

const upper_name = a.toUpperCase();
const lower_name = a.toLowerCase();

//To change name in to title case
function titleCase(a){
    a = a.toLowerCase();
    //this will convert string into an array
    a = a.split(' ');

    for(var i = 0; i<a.length; i++){
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }

    return a.join(' ');
}

console.log(titleCase(a));
console.log(upper_name);
console.log(lower_name);

