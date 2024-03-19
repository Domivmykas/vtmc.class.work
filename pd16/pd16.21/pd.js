function doSomething(callback) {
    // Do something here
    callback();
}

function callbackFunction() {
    console.log("Callback function has been called.");
}

doSomething(callbackFunction);