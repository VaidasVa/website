export default function getIp() {
    document.addEventListener("DOMContentLoaded", function () {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.ip)
                console.log(document.URL);
                console.log(window.location.href)
            })})

}

getIp()