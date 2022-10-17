let names = [];
if (names.length != 0){
    for (var i = 0; i < names.length; i++) {
        if (names[i] == 'Admin') {
            console.log(`Hello Admin, would you like to see a status report?`)
        }
        else {
            console.log(`Hello ${names[i]} thank you for logging in again`)
        }
    }
}
else
{
    console.log(`We need to find some users!`)
}