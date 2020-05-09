window.onload = function(e) {
    if(navigator["gpu"] === undefined || navigator.gpu["requestAdapter"] === undefined) {
        document.getElementById("webgpu-not-supported").hidden = false;
    }
}