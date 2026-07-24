// //synchronous and asychonous

// //API call- async

// console.log("execution before")

// setTimeout(()=>{
//     console.log("async task 1")
// }, 2000)
// setTimeout(()=>{
//     console.log("async task 2")
// }, 1000)
// setTimeout(()=>{
//     console.log("async task 3")
// }, 3000)
// setTimeout(()=>{
//     console.log("async task 4")
// }, 0)

// console.log("execution after")

//promise- pending,fullfill

async function getdata(){
    const res=await fetch("https://www.bing.com/ck/a?!&&p=487e6192fa90ff196ae60b81c1f9f49a5181c5d5b5189e19672706e723f63cd6JmltdHM9MTc4NDc2NDgwMA&ptn=3&ver=2&hsh=4&fclid=0e03d25b-b39d-6387-27f4-c652b29b623a&psq=pixel&u=a1aHR0cHM6Ly93d3cucGV4ZWxzLmNvbS8");
    const response=await res.json();
    console.log(response)
}

function appenddata(data){
    const parentDiv=document.getElementById("parent");
}
getdata()