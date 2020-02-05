
var counter = 0;

document.querySelector("#box").addEventListener("click", () => {
    counter++;
    document.querySelector("#box").innerText = "Value of counter is: " + counter;
});

document.querySelector("button").addEventListener("click", () => {
    counter = 0;
});

// click the box displays : ???
// click the box displays : ???
// click button
// click the box displays : ???

