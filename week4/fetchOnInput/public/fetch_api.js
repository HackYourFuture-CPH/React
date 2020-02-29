function CallApi (callback) {

    return {
        pending : false,
        currentInput : "",
        async call(input) {
            console.log("calling with input: " + input)
            this.pending = true;
            const result = await fetch('/comments?title=' + input)
                .then(response => response.json());
            // call again - if the input has changed since the last call to the api
            if (input !== this.currentInput) {
                console.log("not the same");
                this.call(this.currentInput);
            } else {
                console.log("got it") 
                this.pending = false;
                callback(result);
            }
        }
    }      
}


function makeHtml (result, filterFunc) {
    var makeHtml = "";
    var i = result.length -1;
    // this could also be done with filter and map
    while(i >= 0 ) {
        makeHtml += "<li>" + result[i].title + "</li>";
        i--;
    }
    return makeHtml;
}

function toggleLoading (flag) {
    document.querySelector(".loading").innerHTML = flag ? "Loading..." : "";
} 

function setList (str) {
    document.querySelector('ul').innerHTML = str;
}


// this callback will get executed when the results have arrived
const api = CallApi((result) => {
    toggleLoading(false);
    setList(makeHtml(result));
});

document.querySelector("input").addEventListener('input', function (e) {
    api.currentInput = e.target.value;
    // only make an api call if pending is set to false
    if (!api.pending) {
        toggleLoading(true);
        api.call(api.currentInput);
    }
});


