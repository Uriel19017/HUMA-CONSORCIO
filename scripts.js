let questions = document.querySelectorAll('.question');
let btnDropdowns = document.querySelectorAll('.question .more');
let answers = document.querySelectorAll('.answer');
let paragraphs = document.querySelectorAll('.answer p');
let switchc = [];

for (let i = 0; i < btnDropdowns.length; i++) {

    let altoParrafo = paragraphs[i].clientHeight;
    switchc.push(0);

    btnDropdowns[i].addEventListener('click', () => {

        if (switchc[i] === 0) {
            answers[i].style.height = `${altoParrafo}px`;
            questions[i].style.marginBottom = '10px';
            btnDropdowns[i].innerHTML = '<i>-</i>';
            switchc[i]++;
        } else {
            answers[i].style.height = '0';
            questions[i].style.marginBottom = '0';
            btnDropdowns[i].innerHTML = '<i>+</i>';
            switchc[i]--;
        }

    });
}
