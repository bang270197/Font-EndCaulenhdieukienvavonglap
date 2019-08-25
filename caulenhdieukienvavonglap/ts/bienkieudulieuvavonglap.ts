// let count: number=30;
// if (count>0){
//     count--;
// }else {
//     count=0;
// }


// for (let i=0;i<keys.length;i++){
//     console.log(keys[i]);
// }

// var i=0;
// while (i<keys.length){
//     console.log(keys[i]);
//     i++;
// }
// const user="hung";
// var i=0;
// do {
//     console.log(user[i]);
//     i++
// }while (i<user.length);

// for (const  items of user){
//     console.log(items);
// }
//for-in
const studen={
    name:"bang",
    age:10
};
for (const key in studen){
    console.log(`${key}:${studen[key]} `);
}