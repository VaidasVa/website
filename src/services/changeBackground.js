export default function changeBackground() {
    console.log(window.location.href)
    let loc = window.location.href;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (loc.includes("/photos")){
        document.body.style.backgroundColor = "white"
        metaThemeColor.setAttribute('content', "white");
    } else if (loc.includes("/dev")){
        document.body.style.backgroundColor = "rgb(24,24,26)"
        metaThemeColor.setAttribute('content', "rgb(24,24,26)");
    }
}

changeBackground()