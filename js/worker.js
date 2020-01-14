console.log("Worker is ready");

self.addEventListener("message", (event) => {
    let url = event.data
    fetch(url)
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.text();
            } else {
                return "Fehler";
            }

        })
        .then((text) => self.postMessage(text))
        .catch((err) => console.log(err))

})