// We need our output should be like this- data 1 (then after 3s) data 2 (then after 3s) data 3.

//Callback hell

//let this piece of code is given by API
function getData(dataId, getNextData){
    setTimeout (() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 3000);
}

//function call part--with callback hell
console.log("getting data 1....");
getData(1, () => {
    console.log("getting data 2....");
    getData(2, () => {
        console.log("getting data 3....");
        getData(3);
    });
});





//Promises chain

//let this piece of code is given by API
function getData(dataId){
    return new Promise ((resolve, reject) => {
    setTimeout (() => {
        console.log("data", dataId);
        resolve("success")
    }, 3000);
    });
}


//function call part --with promises
getData(1)
    .then((res) => {
        console.log(res); 
        return getData(2);
    })
    .then((res) => {  
        console.log(res);  
        return getData(3);    
    })
    .then((res) => {  
        console.log(res);  
    });





//Async & Await

//let this piece of code is given by API
function getData(dataId){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            console.log("data", dataId);
            resolve("success")
        }, 3000);
    });
}


//function call part --with async await
async function getAllData() {
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
}

getAllData();
// it is fine if we write this in the console pannel. But for run this code we have to call this function. 
//note: async await is only works in async function.
//note: But if we run this without calling this extra function we need to use IIFE. 

// async & await(best) --> promises chain(better) --> callback hell(good)




