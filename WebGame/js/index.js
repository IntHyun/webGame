const $startBtn = document.querySelector('.btn-start');
const $contRelay = document.querySelector('.cont-relay');
const $inpWord = document.querySelector('.word-input');

const randomWords = [
    '호랑이',
    '딸기',
    '이발소',
    '방어',
    '임시',
    '중국',
    '대한',
    '건치',
    '대학교',
];

$startBtn.addEventListener('click', function () {
    $contRelay.classList.remove('hide');
    $startBtn.classList.add('hide');
    $inpWord.textContent =
        '제시어 : ' +
        randomWords[Math.floor(Math.random() * randomWords.length)];
});
