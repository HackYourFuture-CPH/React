import myState from "./myState.js"

var othervar = "something else"

myState.watch("myvar", function (oldval, newval) {
    if (oldval === newval) return;
    document.querySelector("div").innerHTML = newval + " " + othervar;
})
