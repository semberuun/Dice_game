// Тоглогчийн ээлжийг хадгалах хувьсагч 1 тоглогчийг 0 2 дугаар тоглогчийг 1 тэмдэгдэе
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгадах хувьсагч
var scores = [0, 0];

// Тоглогчдын ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;


// Програм эхлэхэд бэлдэе
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Шооны аль талаара буусныг хадгалах хувьсагч, 1-6 тооны санамсаргүй 
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // шооны зургийг веб дээр гаргаж ирнэ
    diceDom.style.display = 'block'
    // шооны зургийг тохируулж гаргаж ирнэ
    diceDom.src = 'dice-' + diceNumber + '.png';
    // ээлжийн оноог бодно 1 бол ээлжийн сольж оноог 0 болгон
    if (diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        console.log(roundScore);
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан бол тоглогчийн ээлжийг сольно
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


});


