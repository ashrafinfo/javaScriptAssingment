let guest = ['Ali', 'Hamza', 'Ahsan'];

function inviteGuest(guest) {
    for (var i = 0; i < guest.length; i++) {
        console.log(`${guest[i]} i would like to invite you on dinner`);
    }
}

inviteGuest(guest)
console.log(`Sorry, ${guest[1]} can't come to dinner.`);

guest[1] = 'Jazib'

inviteGuest(guest)

