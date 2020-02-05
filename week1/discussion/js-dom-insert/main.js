function makeHtml (number) {

    return (
        `<h1>${number}</h1>
        <ul>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
        </ul>`
    )
}

document.querySelector("button").addEventListener("click", function () {

    var number = Math.random();

    console.time("e");
    
    document.querySelector("div").innerHTML = makeHtml(number);

    console.timeEnd("e");
})
