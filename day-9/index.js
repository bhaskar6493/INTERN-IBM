let num=10;
for(let i=0; i<num; i=i+1){
    console.log(i);
}

let std=['bhaskar','shivam','rahul','sachin','rohit'];
for(let i=1; i<std.length; i=i+1){
    console.log(std[i]);
}

for(let i=0; i<std[0].length; i=i+1){

    console.log(std[0][i]);
}

let alph='abcdefghijklmnopqrstuvwxyz';
for(let i=0; i<alph.length; i=i+1){
    if(i%2==0){
        console.log('this letter is even',alph[i]);
    }else if(i%2!=0){
        console.log('this letter is odd',alph[i]);
    }else{
        console.log('this all are alphabets',alph[i])
    }
}