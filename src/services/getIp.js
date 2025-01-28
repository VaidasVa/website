export default function getIp() {
    const x = "7ydyay8y0d55y8ce4y74=ynekoty?yy";
    document.addEventListener("DOMContentLoaded", function () {
        fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                console.log(window.location.href)
                fetch('https://ipinfo.io/'+ data.ip + x.replaceAll("y","").split('').reverse().join(''))
                    .then((response) => response.json())
                    .then(info => {
                        console.log(info.ip, info.hostname, info.city, info.region, info.country)
                    })
            })})

}

getIp()