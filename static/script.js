"use strict";
function layout() {
    doResize();
    window.addEventListener('resize', function (event) {
        doResize();
    }, true);
}
function doResize() {
    var output = document.getElementById("output");
    if (output === null)
        return;
}
function showError() {
    var output = document.getElementById("error");
    if (output === null)
        return;
    output.classList.remove("hidden");
    output.classList.add("visible");
    setTimeout(hideError, 5000);
}
function hideError() {
    var output = document.getElementById("error");
    if (output === null)
        return;
    output.classList.remove("visible");
    output.classList.add("hidden");
}
function reset() {
    var output = document.getElementById("output");
    if (output === null)
        return;
    output.innerHTML = "";
}
function doRequestKey(event) {
    if (event.key == "Enter") {
        doRequest();
    }
}
function doRequest() {
    var textBox = document.getElementById("text1");
    if (textBox === null)
        return;
    if (textBox.value === "") {
        showError();
        return;
    }
    var str = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu f";
    var output = document.getElementById("output");
    if (output === null)
        return;
    output.innerHTML = "";
    var paths = ["cat1.png", "cat2.png", "cat3.png"];
    var count = Math.floor(Math.random() * 15) + 1;
    for (var i = 0; i < count; i++) {
        var randomPath = "static/images/" + paths[Math.floor(Math.random() * paths.length)];
        var start = Math.floor(Math.random() * (str.length - 300));
        var newDIV = makeOutputDIV(textBox.value, str.substring(start, start + 300), randomPath);
        output.appendChild(newDIV);
    }
    textBox.value = "";
}
function makeOutputDIV(headerstr, content, imgPath) {
    var newDIV = document.createElement("div");
    newDIV.setAttribute("class", "outputdiv");
    var header = document.createElement("span");
    header.setAttribute("class", "headerspan");
    header.innerHTML = headerstr;
    var img = document.createElement("img");
    img.setAttribute("src", imgPath);
    var p = document.createElement("p");
    p.innerText = content;
    newDIV.appendChild(header);
    newDIV.appendChild(document.createElement("br"));
    newDIV.appendChild(img);
    newDIV.appendChild(document.createElement("br"));
    newDIV.appendChild(p);
    return newDIV;
}
//# sourceMappingURL=script.js.map