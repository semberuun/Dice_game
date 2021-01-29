
var activePlayer, scores, roundScore;
var isGameOver;

var diceDom = document.querySelector('.dice');
initGame();

// Програм эхлэхэд бэлдэе
function initGame() {
    isGameOver = false;
    activePlayer = 0;
    // Тоглогчдын цуглуулсан оноог хадгадах хувьсагч
    scores = [0, 0];
    // Тоглогчдын ээлжийн оноог хадгалах хувьсагч
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = "none";
}

// NEW GAME товч ажлуулах хэсэг
document.querySelector('.btn-new').addEventListener('click', function () {
    initGame();
});

// ROLL DICE товчл ажлуулах хэсэг
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGameOver === false) {
        // Шооны аль талаара буусныг хадгалах хувьсагч, 1-6 тооны санамсаргүй 
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // шооны зургийг веб дээр гаргаж ирнэ
        diceDom.style.display = 'block'
        // шооны зургийг тохируулж гаргаж ирнэ
        diceDom.src = 'dice-' + diceNumber + '.png';
        // ээлжийн оноог бодно 1 бол ээлжийн сольж оноог 0 болгон
        if (diceNumber !== 1) {
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // 1 буусан бол тоглогчийн ээлжийг сольно
            switchToNextPlayer();   // DRY dont repeat yourself
        }
    } else {
        alert('Тоглоом дууслаа NEW GAME товч дарна уу');
    }

});
// hold Товч ажлуулах хэсэг
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGameOver === false) {
        // Уг тоглогчийн ээлжийн оноог глобал оноо руу шилжүүлэх
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            isGameOver = true;
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            switchToNextPlayer();
        }
    } else {
        alert('Тоглоом дууслаа NEW GAME товч дарна уу');
    }
});

function switchToNextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = 0;
    roundScore = 0;
    // Хэрэв идэвхтэй тоглогч нь 0 бол идэвхтэй тоглогчийг 1 болго
    // үгүй бол идэвхтэй тоглогчийг 0 болго
    // if (activePlayer === 0) {
    //     activePlayer = 1
    // } else {
    //     activePlayer = 0
    // }
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // Улаан цэгийг шилжүүлнэ
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    diceDom.style.display = "none";
}


