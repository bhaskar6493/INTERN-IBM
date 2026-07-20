//const myfun = (a, b, c) => {
 //return a + b + c;
//};
//out=myfun(10, 20, 30);  
//console.log(out);


//console.log(myname); // ReferenceError: name is not defined); 
//var myname = "John";

//console.log(name)           //name=undefined
//var name='bhaskar'          //name=sachin
//name='sachin'
//console.log(name)


//(()=>{
//console.log("immediatly run")
//})()

//foreach
let arr=[1,2,3,4,5,6,7,8]
//arr.forEach((e,i)=>{
//    console.log(e,i)
//})


//map
//arr.map((e,i)=>{
 //   console.log(e*2,i)
//})

//let fil=arr.filter((e,i)=>{
 //   return e%2!=0
//})
//console.log(fil)

//reduce
//arr.reduce((el,i)=>{
//    console.log(reduce acc=el*2)
//}, 0)

let out=arr.map((e,i)=>{
    return e*5
}).filter((e,i)=>{
    return e%5==0
})

console.log(out)