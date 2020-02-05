var hasRun = false;
function myFunc () {

    var counter = 0;
    if (hasRun === false) {
        document.querySelector("#box").addEventListener("click", () => {
            counter++;
            document.querySelector("#box").innerText = "Value of counter is: " + counter;
        });
        hasRun = true;
    }
}
myFunc();

document.querySelector("button").addEventListener("click", myFunc);

// click the box displays : ???
// click the box displays : ???
// click button
// click the box displays : ???

