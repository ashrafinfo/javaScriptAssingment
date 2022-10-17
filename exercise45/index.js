// function car_info(manufacturer, model, ...options){
//     let car_obj = {
//         'manufacturer': manufacturer,
//         'model': model
//     }
//     for (option of options){
//         car_obj[option] = options;
//        }
//     return car_obj 
// }

// let a = car_info('Honda', 2022, color='red')
// console.log(a)

function make_car(manufacturer, model, ...options){
    car_dict = {
        'manufacturer': manufacturer,
        'model': model,
        }
   for (option of options){
    car_dict[option] = options;
   }
   return car_dict;
}

var my_outback = make_car('subaru', 'outback', color='blue', tow_package=true);
console.log(my_outback)