// // setTimeout(()=>console.log("2 seconds"),2000)
// const names=["And","sarthak"]
// const shortname=names.filter((name)=>name.length>=4)
// console.log(shortname)
// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             latitude:0,
//             longitude:0
//         }
//        callback(data)
//     },2000)
   
// }
// geocode("USA",(data)=>{
// console.log(data)
// })

const add=(a,b,fn)=>{
setTimeout(()=>{
const sum=a+b;
fn(sum)
},2000)

}
add(1,4,(sum)=>console.log(sum))