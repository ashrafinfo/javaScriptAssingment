function make_sandwich(...ingredients){
    console.log(`Adding Ingredients to you sandwich`);
    for(var i=0; i<ingredients.length; i++){
        console.log(`...ading ${ingredients[i]} to your sandwich`)
    }
}

make_sandwich('item1','item2', 'item3');
make_sandwich('item4','item5', 'item6', 'bah');
make_sandwich('item7','item8', 'item9', 'khhlhio', 'aash');