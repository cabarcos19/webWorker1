//events für alle Buttons

let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach(
    (button) => button.addEventListener("click",
        (event) => {
            let url = event.target.getAttribute("data-url");
//            readURL(url);

 /*           window.fetch(url)
                .then((response) => {
                    console.info(response);
                    return response.text();
                })
                .then((text) => document.getElementById("showResult").innerHTML = text)
                .catch((err) => console.log(err))
*/


            let xhttp = new XMLHttpRequest();


            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    document.getElementById("showResult").innerHTML = xhttp.responseText;
                } else if (xhttp.readyState == 4) {
                    document.getElementById("showResult").innerHTML = xhttp.readyState + " / " + xhttp.status;
                } else {
                    console.log(xhttp.readyState + " / " + xhttp.status);
                }
            }
            xhttp.open("GET",url);
            xhttp.send();

        })
);

async function readURL(url) {
    try {
        let response = await window.fetch(url);
        let text = await response.text();
        console.info(response);
        document.getElementById("showResult").innerHTML = text;
    } catch (err) {
        console.log("CATCH");
        console.log(err);
    }
}