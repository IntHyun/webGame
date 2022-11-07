const $startBtn = document.querySelector('.btn-start');
const $contRelay = document.querySelector('.cont-relay');
const $inpWord = document.querySelector('.word-input');
const $turnOn = document.querySelector('.turn');
const $turnOn2 = document.querySelector('.turn2');
const $putWord = document.querySelector('.put-word');
const $putWord2 = document.querySelector('.put-word2');
const $inputWord = document.querySelector('.input-text');
const $submit = document.querySelector('.submit');

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

let words;

$startBtn.addEventListener('click', function () {
    $contRelay.classList.remove('hide');
    $startBtn.classList.add('hide');
    $inpWord.textContent =
        '제시어 : ' +
        randomWords[Math.floor(Math.random() * randomWords.length)];
});

$submit.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(Number($putWord.textContent));
    $inpWord.classList.add('hide');
    if (Number($putWord.textContent) == 0) {
        if ($inputWord.value == '') {
            alert('값을 입력해주세요');
        } else {
            words = $inputWord.value;
            $inputWord.value = null;
            $putWord.textContent = words;
            $turnOn2.textContent = '니 차례야!';
            $turnOn.innerHTML = '&nbsp';
            $putWord2.innerHTML = '&nbsp';
        }
    } else if (Number($putWord2.textContent) == 0) {
        if ($inputWord.value == '') {
            alert('값을 입력해주세요');
        } else {
            $putWord.innerHTML = '&nbsp;';
            words = $inputWord.value;
            $inputWord.value = null;
            $putWord2.textContent = words;
            $turnOn.textContent = '니 차례야!';
            $turnOn2.innerHTML = '&nbsp';
            $putWord.innerHTML = '&nbsp';
        }
    }
});
