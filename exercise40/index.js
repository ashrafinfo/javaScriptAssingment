function make_album(artist_name, album_title, track=0){
    let obj1 = {
        'name': artist_name,
        'title': album_title
    }
    if(track){
        obj1.track = track
    }
    return obj1
}
 
let an =  make_album('Atif Aslam', 'Doori');
console.log(an);
an = make_album('Nusrat', 'IDK');
console.log(an);
an = make_album('Micheal Jakson', 'Blah Blah')
console.log(an);
an = make_album('Abida Parveen', 'Jhoom', track=10)
console.log(an);