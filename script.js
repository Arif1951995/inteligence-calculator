let message = document.querySelector('h1');
let messageArr = [
    `you are einstine`,
    `you are very smart`,
    `your intelligence is quit ok`,
    `you are dumb`,
    `you are very dumb`,
    `you are really smart`
]
function emulator(name) {
    let randomNum = Math.floor(Math.random() * 6);
    message.innerHTML = `Dear ${name} ${messageArr[randomNum]}`;
}

document.querySelector('button').addEventListener('click', function () {
    emulator(document.querySelector('input').value);
    document.querySelector('input').value = '';
})
