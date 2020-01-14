if (window.Worker) {
    let worker = new Worker("js/worker.js");

    worker.addEventListener("message", (event) =>
        document.getElementById("showResult").innerHTML = event.data)


    //events für alle Buttons
    var buttons = document.getElementsByTagName("button");
    Array.from(buttons).forEach(
        (button) => button.addEventListener("click",
            (event) => {
                let url = event.target.getAttribute("data-url");
                worker.postMessage(url);
            })
    );

}


