let disabled = localStorage.getItem('tricks_disabled')
if (!disabled) {
    var link = document.createElement("link");
    link.href = chrome.extension.getURL("style.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}


document.addEventListener('keypress', (e) => {
    // console.log(e)
    if (e.code === 'KeyT' && e.altKey) {
        console.log('t pressed')
        if (!disabled) {
            console.log('disabled')
            localStorage.setItem('tricks_disabled', 'disabled');
        } else {
            console.log('enabled2')
            localStorage.removeItem('tricks_disabled');
        }
        location.reload();
    }
});


// console.log('mite by tricks');

// let lastClick;

// function saveClick(i) {
//     if (i.getAttribute('listener')) {
//         return;
//     }
//     i.setAttribute('listener', true);
//     i.addEventListener('click', function () {
//         lastClick = this;
//         console.log('lastClick saved');
//     });
// }
// function init() {
//     document.querySelectorAll('a.tracker').forEach(saveClick);
// }
// window.setInterval(init, 10000);
// window.setTimeout(init, 1000);

// document.addEventListener('keypress', (e) => {
//     if (lastClick && e.code === 'Space') {
//         lastClick.click();
//     }
// });
