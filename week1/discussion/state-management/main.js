import myState from "./myState.js"
import render from "./render.js";

document.getElementById("my-input").addEventListener("keyup", function (e) {
    myState.setProp("myvar", e.target.value);
});
