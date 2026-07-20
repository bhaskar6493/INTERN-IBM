
//let num=5;

//if(num%3==0){
//   console.log('it is a humpty');
//}else if(num%5==0){
//   console.log('it is a dumpty');
//}else if(num%3==0 && num%5==0){
//    console.log('it is a humpty and dumpty');
///}else{
// console.log('not divisible by 3 and 5');
//}


let str='we are in full stack batch';

for(let char of str){
    if('aeiou'.includes(char))
    {
        console.log('it is a vowel:',char);
        
    }
}


let no=100;
 while(no<200){
    console.log("this given smaller than 200", no);
 }

 let obj={
    name:'sachin',
    age:23,
    city:'pune'
 }
 console.log(obj);

 function myfunc(a,b,c){
    let sum=a+b+c;
 }
 myfunc(10,20,30);
 myfunc(100,200,300);
