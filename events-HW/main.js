//variables

const coordinateLog = document.querySelector('#coordinates');
const coordinateLogClick = document.querySelector('#xyOnClick');
const circle = document.getElementById('circle');


//funciones
function getCoordinate(event){
    coordinateLog.innerText = `
    Screen X/Y: ${event.screenX}, ${event.screenY}`;
}
function getCoordinatesonClick(event){
    coordinateLogClick.innerText =`
    Screen X/Y: ${event.screenX}, ${event.screenY} `;
}

function showCircle (event){
    circle.classList.add('circle--show');
    circle.style.top = event.clientY + 'px';
    circle.style.left = event.clientX + 'px';
}

// function hideCircle(){
//     circle.classList.remove('circle--show');
// }


//eventos

document.addEventListener('mousemove', getCoordinate);
document.addEventListener('click', getCoordinatesonClick);
document.addEventListener('click',showCircle);



//inits
