"use strict";
function layout()
{
    doResize();
    window.addEventListener('resize', function (event) {
        doResize();
    }, true);
}

function doResize()
{
    var output = document.getElementById("output");
    if (output === null)
        return;
}