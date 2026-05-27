function background() {
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

async function listUpdate() {
    const response = await fetch('/theme/prices.json');
    const prices = await response.json();
    let list = {};
    try {JSON.parse(localStorage.getItem('list'))} catch {initialize()}
    if (localStorage.getItem('list')===null) {initialize()}
    list = JSON.parse(localStorage.getItem('list'))

    function initialize() {
        Object.keys(prices).forEach((element, index)=>{
        element=='computer' ? list[element] = true : list[element] = false;
        })
        localStorage.setItem('list', JSON.stringify(list))
    }
    
    Object.keys(prices).forEach((element, index)=>{
        l = Object.keys(list)
        if (element !== l[index]) {
        localStorage.setItem('list', list)
        }
    })
}

function scoreUpdate() {
    const score = localStorage.getItem('score')
    const span = document.querySelector('span');
    if (Number.isInteger(parseInt(score)) && parseInt(score)>=0) {
        span.textContent = score
    } else { localStorage.setItem('score', 0)}
}

async function themeUpdate() {
    const response = await fetch('/theme/prices.json')
    const prices = await response.json()
   if (!Object.keys(prices).includes(localStorage.getItem('theme'))) {localStorage.setItem('theme', 'computer')}
}

setInterval(background, 100)

setInterval(listUpdate, 100)
setInterval(scoreUpdate, 100)
setInterval(themeUpdate, 100)