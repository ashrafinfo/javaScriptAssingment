let current_users = ['Ali', 'Usman', 'Jazib', 'Humza', 'Usama'];
let new_user = ['Jack', 'Ali', 'Usman', 'Farzana', 'Rehana'];

for(var i = 0; i < new_user.length; i++){
    if(current_users.includes(new_user[i])){
     console.log(`${new_user[i]} has been used, ${new_user[i].toUpperCase()} should not be accepted`);   
    }else{
        console.log(`${new_user[i]} is Available`)
    }
}