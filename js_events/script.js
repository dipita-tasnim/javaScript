//Event_Task_1
//Ques 1: Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let body = document.querySelector("body");

let btn = document.querySelector("#btn");

let curr_mode = "light";

btn.onclick = ()=> {   //'let changeMode = () => {' [this structure will be used if we do this code by EventListener(commented below)]
    if(curr_mode == "light"){
        curr_mode = "dark"; //must [for condition maintaining]
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curr_mode = "light"; //must [for condition maintaining]
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curr_mode);//eta just console e dark-light print koranor jonno(not necessary)
}

// btn.addEventListener("click", changeMode);
