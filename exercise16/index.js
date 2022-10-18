let guest = ['Ali', 'Hamza', 'Ahsan'];

function inviteGuest(guest) {
    for (var i = 0; i < guest.length; i++) {
        console.log(`${guest[i]} i would like to invite you on dinner`);
    }
}

inviteGuest(guest);
console.log(`Sorry, ${guest[1]} can't come to dinner.`);

guest[1] = 'Jazib'

inviteGuest(guest);


console.log(`We've got bigger table. `);
guest.splice(0,0, 'Jesica');
guest.splice(3, 0, 'Zunaira');
guest.push('Saqlain');

inviteGuest(guest);

console.log(`Sorry, we can only invite two people to dinner.`);
for(var j=2; j<guest.length; j++){
    console.log(`${guest[j]}, there's no space at the table.`)
}

guest.splice(2,7);
//we can also remove items from array using pop()

inviteGuest(guest);

