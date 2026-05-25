function backgroundUpdate() {
    const theme = localStorage.getItem('theme');
    const body = document.querySelector('body');
    if (theme===null) {localStorage.setItem('theme', 'computer')} 
    body.style.cssText = `
        display: flex;
        background-image:
        radial-gradient(circle at center, rgb(0,0,0,0), black),
        url(/theme/${theme}.gif);
        align-items: center;
        justify-content: center;
        background-color: black;
        background-repeat: repeat-x;
        background-attachment: fixed;
        background-position: 50%;
        background-size: auto 100%;}`
};

function scoreUpdate() {
    const score = localStorage.getItem('score')
    const span = document.querySelector('span');
    if (Number.isInteger(parseInt(score)) && parseInt(score)>=0) {
        span.textContent = score
    } else { localStorage.setItem('score', 0)}
}

setInterval(backgroundUpdate, 100)
setInterval(scoreUpdate, 100)