const URL = "http://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL); //response is a promise
    console.log(response); //JSON format(this is not readable format)
    let data = await response.json(); //data is a promise [this makes readable format]
    console.log(data); // 5 length er ekta array return kore. etai data.
    console.log(data[0].text); //0 number index er element text hishebe show kore.
    factPara.innerText = data[0].text; //webspage e show koralam [console e getFacts call dite hobe]

}

// //or--- can be done by using promise chain
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data[0].text;
//         });
// }

//async-await is better than promise chain but promise chain is also used in everywhere.

// JS e API fetch korte always async programing e hoy. kintu API fetch korte to time lage. aar eta execute na howa porjonto porer line e jawa jabe na(nahole to thikmoto kaj korbe na). er jonno await diye sync programing er moto kaj korate hoy.
