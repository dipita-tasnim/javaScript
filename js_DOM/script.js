//DOM Task 1
//Ques 1: 
//part 1) Create a h2 heading element with text - "Hello Javascript". Append "from developer Dipita" to this text using JS.
//part 2) Create 3 divs with common class name - "box". Access them and add some unique text to each of them.

//first we will access, then we will change.
//We can access by id/by class/by tag. Here we have tag h2 given. So will access it by tag.

//accessing the tag
let H2 = document.querySelector("h2"); //H2 is the variable name, and h2 is the tag.
console.dir(H2);

//accessing the text of the tag
console.dir(H2.innerText)

//now we will change the text
H2.innerText = H2.innerText + " from developer Dipita";

//accessing the class
let divs = document.querySelectorAll(".box");
console.dir(divs)

//accessing individual class
console.dir(divs[0])
//console e classes[0] likhe enter dile '<div class="box">First box</div>' eta show hobe.

//Accessing the text of the class
// console.dir(classes.innerText)-->undefined--> need to access/change individually.
//like this-
console.dir(divs[0].innerText)
console.dir(divs[1].innerText)
console.dir(divs[2].innerText)

//Changing the text of the class
divs[0].innerText = "chocolate box";
divs[1].innerText = "mystery box";
divs[2].innerText = "magic box";

//Accessing the div of the class using loop
for (i of divs) {
    console.log(i);
    //by using i.innerText we get just text
}

//Accessing the text of the class using loop
for (i of divs) {
    console.log(i.innerText);
}

//changing the text of the class using loop
let index = 1;
for (i of divs) {
    i.innerText = `my box ${index}`;
    index += 1;
    // console.log(divs.innerText);
}


//Now my webpage is successfully changed from first, second, third box to--chocolate, mystery, magic box to--my box 1, my box 2, my box 3 with javaDcript code instead of html codes.



//DOM Task 2
//Ques 2: Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.

let btn = document.createElement("button");

btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body = document.querySelector("body");

body.prepend(btn);



//DOM Task 3
//Ques 3: Create a <p> tag in html, give it a class. Give it some styling in CSS. Now create a new class in CSS and using JS, try to append this class to the <p> element.

let para = document.querySelector("p");
// para.setAttribute("class", "newClass");

//Notice: In this case the old style of <p> tag will be lost. If we need both old and new one then classList should be used instead of setAttribute.
//comment the setAttribute line and uncomment the classList line. 
para.classList.add("newClass");
//Ekhankar html file e class ektai ache(content) but webpage e inspect kore element e gele dekhbo duita class(content, newClass) p tag er jonno lekha.